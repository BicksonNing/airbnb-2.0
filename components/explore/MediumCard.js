import Image from "next/image";

const MediumCard = ({ title, img }) => {
  return (
    <div className=' mt-5 hover:scale-105 transition transform duration-300 ease-out cursor-pointer'>
      <div className='relative h-80 w-80'>
        <Image className='rounded-xl' src={img} layout='fill' />
      </div>
      <h2 className='text-lg  font-semibold'>{title}</h2>
    </div>
  );
};

export default MediumCard;
