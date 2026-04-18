import * as React from "react";
import { motion, type Transition } from "framer-motion";

import { cn } from "@/lib/utils";

type CursorPosition = {
  left: number;
  top: number;   // 1. Add top
  width: number;
  height: number; // 2. Add height
  opacity: number;
};

export type SlidingChipTabItem = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

type SlidingChipTabsProps = {
  items: SlidingChipTabItem[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
  cursorClassName?: string;
  chipClassName?: string;
  chipLayoutId?: string;
  chipTransition?: Transition;
};

export function SlidingChipTabs({
  items,
  value,
  onValueChange,
  className,
  tabClassName,
  activeTabClassName,
  inactiveTabClassName,
  cursorClassName,
  chipClassName,
  chipLayoutId = "sliding-chip-tab",
  chipTransition = { type: "spring", duration: 0.5 },
}: SlidingChipTabsProps) {
  const [position, setPosition] = React.useState<CursorPosition>({
    left: 0,
    top: 0,    // Initialize top
    width: 0,
    height: 0, // Initialize height
    opacity: 0,
  });

  return (
    <div
      onMouseLeave={() => {
        setPosition((previous) => ({
          ...previous,
          opacity: 0,
        }));
      }}
      className={cn("relative flex w-fit items-center flex-wrap", className)}
    >
      {items.map((item) => {
        const isActive = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            disabled={item.disabled}
            onClick={() => onValueChange(item.value)}
            onMouseEnter={(event) => {
              const element = event.currentTarget;
              // 3. Extract height from getBoundingClientRect
              const { width, height } = element.getBoundingClientRect();

              setPosition({
                left: element.offsetLeft,
                top: element.offsetTop, // 4. Grab offsetTop for multiline support
                width,
                height,                 // 5. Set height
                opacity: 1,
              });
            }}
            className={cn(
              "relative z-10 rounded-md transition-colors",
              tabClassName,
              isActive ? activeTabClassName : inactiveTabClassName
            )}
          >
            <span className="relative z-10">{item.label}</span>
            {isActive ? (
              <motion.span
                layoutId={chipLayoutId}
                transition={chipTransition}
                className={cn("absolute inset-0 z-0 rounded-[inherit]", chipClassName)}
              />
            ) : null}
          </button>
        );
      })}

      <motion.span
        animate={position}
        // Ensure you don't pass static height/top classes in cursorClassName
        className={cn("pointer-events-none absolute z-0 rounded-md", cursorClassName)}
      />
    </div>
  );
}