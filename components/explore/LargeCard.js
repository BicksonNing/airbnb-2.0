import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className=' py-16 cursor-pointer '>
      <div className='relative hover:scale-105 transition transform duration-300 ease-in-out'>
        <div className='relative h-96 min-w-[300px] '>
          <Image
            className='rounded-lg'
            src={img}
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='absolute top-20 md:top-20 left-12'>
          <h3 className='text-3xl md:text-5xl mb-3 w-64 text-white font-semibold'>
            {title}
          </h3>
          <p className=' text-white text-md md:text-xl w-40 md:w-80'>
            {description}
          </p>
          <button className='bg-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold mt-5 md:mt-10'>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LargeCard;
