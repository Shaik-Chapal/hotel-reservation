import image from '../assets/christian-lambert-vmIWr0NnpCQ-unsplash.jpg'

export function HeroSection() {
  return (
    <div className="relative w-full pb-8">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
    
        <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
          Explore Outstanding Hotels and Indulge in a <span className='text-[#0B8185] capitalize'>Memorable Stay</span>
        </h1>
       
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
  className="aspect-[3/2] bg-gray-50 rounded object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]"
  src={image}
  alt="Hotel Image"
/>

      </div>
    </div>
  </div>
  
  )
}
