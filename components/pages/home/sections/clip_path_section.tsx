import { AnimateSvg } from "@/components/ui/animate_path";
import ClipPathImage from "./clip_path/clip_path_image";
import { ScrollAnimation } from "@/components/scroll-animation";

export function ClipPathSection() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center items-center bg-[radial-gradient(#0000001a_1px,#f9fafb_1px)] bg-[size:39px_39px]">

            {/* Title Area - Centered at the top */}
            <div className="w-full max-w-4xl mx-auto text-center z-10 mb-12 lg:mb-20">
                <h2 className="leading-tight text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900">
                    <ScrollAnimation
                        viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
                    >
                        <span className="inline-block line-through decoration-[6px] decoration-gray-400 mb-2">
                            Not Random
                        </span>
                    </ScrollAnimation>
                    {/* <br /> */}
                    <ScrollAnimation
                        viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
                    >
                        <span className="inline-block text-black mt-2">
                            Divinely Placed
                        </span>
                    </ScrollAnimation>
                </h2>
            </div>

            {/* Content Area: SVGs + Image grouped together */}
            <div className="flex flex-row items-center justify-center w-full max-w-6xl mx-auto relative z-10 gap-4 lg:gap-12">

                {/* Left Decorative SVG */}
                <ScrollAnimation
                    viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
                >

                    <div className="hidden lg:flex w-64 h-64 xl:w-80 xl:h-80 items-center justify-center pointer-events-none opacity-60">
                        <AnimateSvg
                            width="100%"
                            height="100%"
                            viewBox="0 0 355 162"
                            className="my-svg-animation"
                            path="M3 153.9C19.7648 151.422 58.3853 148.645 58.3853 123.767C58.3853 109.758 41.9931 109.583 35.4673 119.947C29.8677 128.841 29.3802 151.014 41.6212 155.385C68.0833 164.836 96.3337 155.089 121.41 146.367C158.021 133.632 195.283 106.274 215.841 72.7318C223.827 59.7017 248.721 3.98332 214.143 3.02276C159.312 1.49957 148.663 76.8016 170.111 114.748C179.098 130.649 200.663 140.818 217.963 143.29C237.073 146.02 266.527 131.63 270.271 111.035C273.351 94.0976 254.758 100.754 250.43 111.884C244.084 128.203 258.692 140.196 273.773 140.531C298.453 141.08 318.113 127.233 334.463 109.974C339.288 104.881 348.912 91.2687 350.484 84.1909C351.915 77.7539 351.661 81.7626 350.697 86.1007C349.794 90.1648 352.5 94.2726 352.5 98.5146C352.5 100.006 350.591 90.7585 350.591 88.0105C350.591 74.942 333.087 85.5908 325.763 87.0556"
                            strokeColor="#6B7280" // Changed to a nice gray hex
                            strokeWidth={6}       // Slightly thinner for elegance
                            strokeLinecap="round"
                            animationDuration={1.5}
                            animationDelay={0}
                            animationBounce={0.3}
                            reverseAnimation={true}
                            enableHoverAnimation={true}
                        />
                    </div>
                </ScrollAnimation>

                {/* Center Image */}
                <ScrollAnimation
                    viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
                >
                    <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center relative shrink-0">
                        <ClipPathImage />
                    </div>
                </ScrollAnimation>

                {/* Right Decorative SVG */}
                <ScrollAnimation
                    viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
                >
                    <div className="hidden lg:flex w-64 h-64 xl:w-80 xl:h-80 items-center justify-center pointer-events-none opacity-60 scale-x-[-1]">
                        <AnimateSvg
                            width="100%"
                            height="100%"
                            viewBox="0 0 355 162"
                            className="my-svg-animation"
                            path="M3 153.9C19.7648 151.422 58.3853 148.645 58.3853 123.767C58.3853 109.758 41.9931 109.583 35.4673 119.947C29.8677 128.841 29.3802 151.014 41.6212 155.385C68.0833 164.836 96.3337 155.089 121.41 146.367C158.021 133.632 195.283 106.274 215.841 72.7318C223.827 59.7017 248.721 3.98332 214.143 3.02276C159.312 1.49957 148.663 76.8016 170.111 114.748C179.098 130.649 200.663 140.818 217.963 143.29C237.073 146.02 266.527 131.63 270.271 111.035C273.351 94.0976 254.758 100.754 250.43 111.884C244.084 128.203 258.692 140.196 273.773 140.531C298.453 141.08 318.113 127.233 334.463 109.974C339.288 104.881 348.912 91.2687 350.484 84.1909C351.915 77.7539 351.661 81.7626 350.697 86.1007C349.794 90.1648 352.5 94.2726 352.5 98.5146C352.5 100.006 350.591 90.7585 350.591 88.0105C350.591 74.942 333.087 85.5908 325.763 87.0556"
                            strokeColor="#6B7280"
                            strokeWidth={6}
                            strokeLinecap="round"
                            animationDuration={1.5}
                            animationDelay={0.4}
                            animationBounce={0.3}
                            reverseAnimation={true}
                            enableHoverAnimation={true}
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}