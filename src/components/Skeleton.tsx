const Skeleton = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
      {Array.from({ length: 6 })
        .fill(0)
        .map((_item, i) => (
          <div className='animate-pulse flex space-x-4' key={i}>
            <div className='rounded-md bg-[#e7f0f8] h-[60px] w-[60px]'></div>
            <div className='flex-1 space-y-6 py-1'>
              <div className='space-y-3'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='h-4 bg-[#e7f0f8] rounded col-span-2'></div>
                  <div className='h-4 bg-[#e7f0f8] rounded col-span-1'></div>
                </div>
                <div className='h-4 bg-[#e7f0f8] rounded'></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Skeleton
