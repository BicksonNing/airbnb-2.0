import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 transition transform duration-200 cursor-pointer hover:scale-105'>
      <Image
        className='rounded-xl'
        src={img}
        width={70}
        height={70}
        objectFit='contain'
      />

      <div className=''>
        <h2 className='text-lg font-semibold'>{location}</h2>
        <p className='text-gray-700'>{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
