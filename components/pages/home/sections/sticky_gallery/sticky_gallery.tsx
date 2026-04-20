import { BlurVignette, BlurVignetteArticle } from "@/components/blur-vignette";
import { dark_glassmorphism } from "@/components/layout/header/constants";
import { cn } from "@/lib/utils"
import Image from "next/image"

const image_shadow = 'shadow-[inset_0px_30px_40px_0px_rgba(0,0,0,0.1),inset_0px_0px_20px_0px_rgba(0,0,0,0.1),0px_-5px_10px_0px_rgba(63,63,63,0.2)]'

function FigureSkew({ index, url, className }: { index: number; url: string; className?: string; }) {
    const isOdd = index % 2 !== 0
    return (
        <figure className={cn(
            className,
            dark_glassmorphism,
            "relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden",
            !isOdd ? "-skew-x-6 md:-skew-x-12" : "skew-x-6 md:skew-x-12"
        )}>
            <BlurVignette
                radius='24px'
                inset='10px'
                transitionLength='100px'
                blur='15px'
                className="relative h-full w-full rounded-2xl"
            >
                <Image
                    src={url}
                    alt=''
                    width={600}
                    height={600}
                    className={cn(
                        // 3: Added -z-10 to push the absolute image behind the vignette effect
                        'transition-all duration-300 mx-auto w-full relative h-full object-cover',
                        image_shadow,
                        `${!isOdd ? "skew-x-6 md:skew-x-12" : "-skew-x-6 md:-skew-x-12"} scale-110 md:scale-125`
                    )}
                />
                <BlurVignetteArticle/>
            </BlurVignette>
        </figure>
    )
}

export function StickyGallery({ images }: { images: string[] }) {
    return (
        <div className='grid gap-8 md:gap-12 w-full place-items-center'>
            {images.map((image, index) => (
                <FigureSkew url={image} index={index} key={image} />
            ))}
        </div >
    )
}