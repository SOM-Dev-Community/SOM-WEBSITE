"use client";

import React, { useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";

// --- Types ---
export interface StatCounterProps {
    value?: number;
    startValue?: number;
    step?: number;
    prefix?: string;
    suffix?: string;
    label?: string;
    duration?: number;
    decimals?: number;
    valueColor?: string;
    labelColor?: string;
    valueSize?: number | string;
    labelSize?: number | string;
    fontWeight?: number | string;
}

// --- Utility Functions ---
function formatValue(value: number, decimals: number): string {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}

function applyStep(val: number, stepVal: number): number {
    if (!stepVal || stepVal <= 0) return val;
    return Math.round(val / stepVal) * stepVal;
}

// --- Main Component ---
export default function StatCounter({
    value = 40000,
    startValue = 0,
    step = 1,
    prefix = "",
    suffix = "K+",
    label = "Campaigns",
    duration = 1.4,
    decimals = 0,
    valueColor = "#e5e5e5",
    labelColor = "#9ca3af",
    valueSize = 56,
    labelSize = 14,
    fontWeight = 500,
}: StatCounterProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Triggers the animation once the element enters the viewport
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const motionValue = useMotionValue(startValue);

    useEffect(() => {
        if (!inView) return;

        // Reset to start value before animating
        motionValue.set(startValue);

        const controls = animate(motionValue, value, {
            duration,
            ease: "easeOut",
        });

        return controls.stop;
    }, [inView, value, startValue, duration, motionValue]);

    // Transform the raw motion value into the formatted string
    const display = useTransform(motionValue, (latest) => {
        const stepped = applyStep(latest, step);
        return `${prefix}${formatValue(stepped, decimals)}${suffix}`;
    });

    return (
        <div
            ref={ref}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
            <motion.div
                style={{
                    color: valueColor,
                    fontSize: valueSize,
                    fontWeight: fontWeight,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                }}
            >
                {display}
            </motion.div>
            <div
                style={{
                    color: labelColor,
                    fontSize: labelSize,
                    opacity: 0.85,
                }}
            >
                {label}
            </div>
        </div>
    );
}