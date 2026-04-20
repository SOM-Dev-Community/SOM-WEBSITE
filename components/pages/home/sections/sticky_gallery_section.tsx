"use client"

import React from "react";
import { StickyGallery } from "./sticky_gallery/sticky_gallery";

export function StickyGallerySection(): React.JSX.Element {
  return (
    <section className='text-white   w-full bg-slate-950  '>
      <div className='grid grid-cols-2'>
        <div className='sticky top-0 h-screen flex items-center justify-center'>
          <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
            Thanks To Scroll.
            <br /> Now Scroll Up Again☝️🏿
          </h1>
        </div>
        <div className="overflow-x-hidden">
          <StickyGallery />
        </div>
      </div>
    </section>
  )
}