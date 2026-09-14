"use client";

import React from "react";
import { BlurVignette, BlurVignetteArticle } from "@/components/blur-vignette";
import { imageList } from "@/public/images_list";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WhoAreWeSection({ showButton = false }) {
    return (

        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 md:px-12 py-16 md:py-32 bg-transparent max-w-7xl mx-auto overflow-hidden">

            <div className="relative w-full lg:w-1/2 max-w-xl lg:max-w-none aspect-video shadow-2xl shadow-indigo-600/30 rounded-3xl overflow-hidden shrink-0">
                <BlurVignette
                    radius="0px"
                    inset="10px"
                    transitionLength="100px"
                    blur="15px"
                    className="h-full w-full"
                >
                    <Image
                        src={imageList?.image_3?.src || "/placeholder.jpg"}
                        alt="Loveworld Sons of Ministry"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <BlurVignetteArticle />
                </BlurVignette>
            </div>

            <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none text-sm  text-slate-600">
                <h2 className="text-2xl md:text-3xl uppercase font-bold text-slate-800 tracking-wide">
                    Who are we?
                </h2>

                {/* Replaced bg-linear-to-r with standard Tailwind bg-gradient-to-r */}
                <div className="w-24 h-1 mt-4 rounded-full bg-linear-to-r from-indigo-600 to-[#DDD9FF]"></div>

                <div className="mt-8 space-y-5 leading-relaxed">
                    <p>
                        The Loveworld Sons of Ministry was birthed by the Man of God, Reverend Chris Oyakhilome DSc, Dsc, DD,
                        by the inspiration of the Holy Spirit to reach a specific group of people—Ministers&apos; Children.
                        Our mission is to reach out to all Ministers&apos; children from all over the world, training and
                        instilling the realities of God&lsquo;s Word in them and raising them for the expansion of the gospel.
                    </p>

                    <p>
                        Since its inception in 2017, the Man of God, Rev. Chris Oyakhilome, has trained and equipped
                        Ministers&apos; children from all over the world, bringing to light that being a child of a Minister
                        was divinely orchestrated.
                    </p>

                    <p>
                        As Preachers&rsquo; Kids, they have been uniquely called into Ministry, empowered with the truth
                        to carry out the vision of the gospel to every corner of the globe.
                    </p>
                </div>

                {showButton && (
                    <Button
                        className="group flex w-fit items-center gap-3 mt-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-6 px-8 rounded-full text-white font-medium"
                        asChild
                    >
                        <Link href="/about">
                            <span>Read more</span>
                            <svg
                                width="13"
                                height="12"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path
                                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </Button>
                )}
            </div>
        </section>
    )
}