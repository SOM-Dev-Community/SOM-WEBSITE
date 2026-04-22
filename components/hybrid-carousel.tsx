"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { imageList } from "@/public/images_list"
import { cn } from "@/lib/utils"

export type HybridCarouselItem = {
  src: string
  alt?: string
}

type HybridCarouselProps = {
  items?: ReadonlyArray<HybridCarouselItem>
  intervalMs?: number
  className?: string
}

const DEFAULT_SLIDES: HybridCarouselItem[] = [
  {
    src: imageList.pks_3.src,
    alt: "SOM gathering in a shared worship moment",
  },
  {
    src: imageList.pks_1.src,
    alt: "Ministers' children during a SOM conference session",
  },
  {
    src: imageList.pks_2.src,
    alt: "SOM participants engaged during a ministry experience",
  },
  {
    src: imageList.b_2.src,
    alt: "Community moment from a SOM event",
  },
  {
    src: imageList.wsa_2.src,
    alt: "Training and fellowship during a SOM program",
  },
]

function getSlideDirection(
  previousIndex: number,
  nextIndex: number,
  totalSlides: number
): -1 | 1 {
  if (totalSlides <= 1 || previousIndex === nextIndex) {
    return 1
  }

  if (previousIndex === totalSlides - 1 && nextIndex === 0) {
    return 1
  }

  if (previousIndex === 0 && nextIndex === totalSlides - 1) {
    return -1
  }

  return nextIndex > previousIndex ? 1 : -1
}

function formatSlideNumber(value: number) {
  return value.toString().padStart(2, "0")
}

export function HybridCarousel({
  items = DEFAULT_SLIDES,
  intervalMs = 4500,
  className,
}: HybridCarouselProps) {
  const prefersReducedMotion = useReducedMotion()
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState<-1 | 1>(1)
  const [isHovered, setIsHovered] = React.useState(false)
  const [hasFocusWithin, setHasFocusWithin] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const previousIndexRef = React.useRef(0)
  const slideCount = api?.scrollSnapList().length ?? items.length
  const safeCurrentIndex = Math.min(currentIndex, Math.max(slideCount - 1, 0))

  const syncCarouselState = React.useEffectEvent((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return
    }

    const nextIndex = emblaApi.selectedScrollSnap()
    const totalSlides = emblaApi.scrollSnapList().length

    setDirection(
      getSlideDirection(previousIndexRef.current, nextIndex, totalSlides)
    )
    previousIndexRef.current = nextIndex
    setCurrentIndex(nextIndex)
  })

  const autoplayEnabled =
    slideCount > 1 &&
    !prefersReducedMotion &&
    !isHovered &&
    !hasFocusWithin &&
    !isDragging

  const advanceSlide = React.useEffectEvent(() => {
    if (!api || !autoplayEnabled) {
      return
    }
    api.scrollNext()
  })

  React.useEffect(() => {
    if (!api) {
      return
    }

    const handleSelect = () => syncCarouselState(api)
    const handlePointerDown = () => setIsDragging(true)
    const handleSettle = () => setIsDragging(false)
    const animationFrame = window.requestAnimationFrame(handleSelect)

    api.on("select", handleSelect)
    api.on("reInit", handleSelect)
    api.on("pointerDown", handlePointerDown)
    api.on("settle", handleSettle)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
      api.off("pointerDown", handlePointerDown)
      api.off("settle", handleSettle)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || !autoplayEnabled) {
      return
    }

    const autoplayTimer = window.setInterval(() => {
      advanceSlide()
    }, intervalMs)

    return () => {
      window.clearInterval(autoplayTimer)
    }
  }, [api, autoplayEnabled, intervalMs])

  if (!items.length) {
    return null
  }

  const slideTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    }

  const handleFocusCapture = () => setHasFocusWithin(true)
  const handleBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null

    if (!event.currentTarget.contains(nextTarget)) {
      setHasFocusWithin(false)
    }
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: items.length > 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      className={cn(
        "group relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)]",
        className
      )}
    >
      <CarouselContent className="ml-0">
        {items.map((slide, index) => {
          const isActive = index === safeCurrentIndex

          return (
            <CarouselItem
              key={`${slide.src}-${index}`}
              className="relative pl-0"
              aria-label={`${formatSlideNumber(index + 1)} of ${formatSlideNumber(slideCount)}`}
            >
              <motion.div
                initial={false}
                animate={
                  isActive
                    ? { opacity: 1, scale: 1, x: 0 }
                    : { opacity: 0.72, scale: 0.985, x: direction > 0 ? -28 : 28 }
                }
                transition={slideTransition}
                className="relative aspect-[16/10] w-full sm:aspect-video"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt ?? `SOM highlight ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_45%,rgba(15,23,42,0.62)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%)]" />
              </motion.div>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      {slideCount > 1 ? (
        <>
          <CarouselPrevious className="left-4 top-1/2 z-20 -translate-y-1/2 border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 hover:text-white" />
          <CarouselNext className="right-4 top-1/2 z-20 -translate-y-1/2 border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 hover:text-white" />
        </>
      ) : null}

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => {
          const isActive = index === safeCurrentIndex
          return (
            <button
              key={`indicator-${index}`}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                isActive
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </Carousel>
  )

}

export default HybridCarousel
