import Image from "next/image";

const Banner = () => {
  return (
    <div className='relative duration-300 h-[600px] sm:h-[700px] md:h-[750px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
      />

      <div className='absolute top-1/2 w-full text-center space-y-5'>
        <p className='text-xl font-bold sm:text-lg text-gray-700'>
          Not sure where to go? Perfect.
        </p>
        <button className='bg-white text-lg font-bold py-3 md:py-5 px-10 md:px-16 shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150'>
          <p className='text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-pink-600'>
            I'm flexible
          </p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
