import Image from 'next/image';

export default function HomeHero() {
  return (
    <section className='flex flex-col-reverse items-center justify-center md:flex-row py-8 md:py-10 lg:py-12 xl:py-16 gap-4 md:gap-10 lg:gap-20'>
      <div className='flex flex-col justify-center text-2xl md:text-3xl md:text-4xl lg:text-5xl text-blue-800 text-center md:text-left font-semibold px-2'>
        <h1>
          Electrical, HVAC &amp; Plumbing{' '}
          <span className='block'>services for your home...</span>
          <span className='block italic pt-4 md:pt-10'>
            ...all under one roof!
          </span>
        </h1>
      </div>
      <div className='w-2/5 md:w-1/3 max-w-[350px]'>
        <Image
          src='/images/dsd-house-blue.png'
          alt='DSD Services logo shaped like a house. Under the roof are four circles with a lightning bolt, flame, snowflake, and water droplet.'
          width={403}
          height={451}
        />
      </div>
    </section>
  );
}
