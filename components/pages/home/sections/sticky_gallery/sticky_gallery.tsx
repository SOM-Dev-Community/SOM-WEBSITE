import { cn } from "@/lib/utils"

export function StickyGallery() {
    const class_name = 'grid place-content-center'
    const image_shadow = 'shadow-[inset_0px_30px_40px_0px_rgba(0,0,0,0.1),inset_0px_0px_20px_0px_rgba(0,0,0,0.1),0px_-5px_10px_0px_rgba(63,63,63,0.2)]'

    return (
        <div className='grid gap-2 w-full'>
            <figure className={cn(class_name, '-skew-x-6 md:-skew-x-12')}>
                <img
                    src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                    alt=''  
                    className={cn('transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover rounded-xl', image_shadow)}
                />
            </figure>
            
            <figure className={cn(class_name, 'skew-x-6 md:skew-x-12')}>
                <img
                    src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                    alt=''
                    className={cn('transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover rounded-xl', image_shadow)}
                />
            </figure>
            
            <figure className={cn(class_name, '-skew-x-6 md:-skew-x-12')}>
                <img
                    src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                    alt=''
                    className={cn('transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover rounded-xl', image_shadow)}
                />
            </figure>
            
            <figure className={cn(class_name, 'skew-x-6 md:skew-x-12')}>
                <img
                    src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                    alt=''
                    className={cn('transition-all duration-300 w-64 h-80 md:w-80 md:h-96 align-bottom object-cover rounded-xl', image_shadow)}
                />
            </figure>
        </div >
    )
}