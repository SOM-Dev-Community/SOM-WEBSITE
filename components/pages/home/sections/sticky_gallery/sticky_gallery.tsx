export function StickyGallery() {
    return(
        <div className='grid gap-2'>
            <figure className='grid place-content-center -skew-x-12'>
                <img
                    src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                    alt=''
                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                />
            </figure>
            <figure className='grid place-content-center skew-x-12'>
                <img
                    src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                    alt=''
                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                />
            </figure>
            <figure className='grid place-content-center -skew-x-12'>
                <img
                    src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                    alt=''
                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                />
            </figure>
            <figure className='grid place-content-center skew-x-12'>
                <img
                    src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                    alt=''
                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                />
            </figure>
        </div>
    )
}