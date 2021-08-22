import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({
  description,
  img,
  lat,
  long,
  location,
  price,
  star,
  title,
  total,
}) {
  return (
    <div className='flex rounded-lg p-2 items-center hover:opacity-80 hover:shadow-lg transition ease-in-out duration-200 cursor-pointer'>
      <div className='relative h-32 w-40 md:h-52 md:w-80 md:hover:scale-95 ease-in-out transition transform duration-300'>
        <Image
          className='rounded-lg'
          src={img}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col justify-between w-full px-4 space-y-3 md:space-y-10'>
        <div>
          <div className='flex justify-between'>
            <p className='text-xs md:text-sm text-gray-500'>{location}</p>
            <HeartIcon className='h-4 md:h-7 cursor-pointer ' />
          </div>

          <h1 className='text-md md:text-2xl font-semibold mb md:mb-3'>
            {title}
          </h1>
          <p className='text-xs md:text-sm text-gray-500'>{description}</p>
        </div>
        <div className='flex justify-between items-center md:items-end'>
          <div className='flex space-x-1 md:space-x-3 items-center'>
            <StarIcon className='h-4 md:h-5 text-red-400' />
            <p className='text-xs md:text-sm'>{star}</p>
          </div>

          <div className='flex md:flex-col md:items-end space-y md:space-y-2 space-x-3 items-center'>
            <h1 className='text-lg: md:text-2xl font-bold'>{price}</h1>
            <p className='text-sm text-gray-500'> {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
