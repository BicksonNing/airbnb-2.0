import Image from "next/image";
import {
  GlobeAltIcon,
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { useMediaQuery } from "@react-hook/media-query";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const isSmallScreen = useMediaQuery("(max-width: 38rem)");

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className='sticky top-0 z-50 grid md:grid-cols-3 bg-white md:shadow-md px-5 py-4 md:px-10'>
      {/* left */}
      <div className='hidden relative md:flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* center */}
      <div className='flex col-span-3 md:col-span-1 items-center border-2 bg-white rounded-full py-1 px-2 md:shadow-sm hover:shadow-md cursor-pointer'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder='Start your Search'
          className='flex-grow outline-none bg-transparent px-3 text-sm text-gray-600 placeholder-gray-400 cursor-pointer'
        />
        <SearchIcon className='flex-none h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:bg-red-500' />
      </div>
      {/* right */}
      <div className='hidden md:flex items-center space-x-3 justify-end text-gray-600'>
        <p className='hidden lg:inline-flex rounded-full py-3 px-3 hover:bg-gray-100 duration-100 cursor-pointer'>
          Become a Host
        </p>
        <GlobeAltIcon className='h-12 p-3  hover:bg-gray-100 rounded-full' />

        <div className='flex items-center border-2 rounded-full hover:shadow-md py-1 px-2 space-x-2'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-8' />
        </div>
      </div>

      {searchInput && (
        <div className='py-5 flex-col col-span-3 mx-auto'>
          <div>
            {isSmallScreen ? (
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            ) : (
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
