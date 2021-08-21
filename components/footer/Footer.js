import { CurrencyRupeeIcon, GlobeAltIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-16 grid md:grid-cols-4 text-sm divide-y md:divide-opacity-0 divide-gray-400 '>
        <div className='space-y-4 my-5'>
          <h5 className='font-bold'>ABOUT</h5>

          <p className='hover:underline cursor-pointer'>How Airbnb works</p>
          <p className='hover:underline cursor-pointer'>Newsroom</p>
          <p className='hover:underline cursor-pointer'>Airbnb 2021</p>
          <p className='hover:underline cursor-pointer'>Investors</p>
          <p className='hover:underline cursor-pointer'>Airbnb Plus</p>
          <p className='hover:underline cursor-pointer'>Airbnb Luxe</p>
          <p className='hover:underline cursor-pointer'>HotelTonight</p>
          <p className='hover:underline cursor-pointer'>Airbnb for Work</p>
          <p className='hover:underline cursor-pointer'>
            Made possible by Hosts
          </p>
          <p className='hover:underline cursor-pointer'>Careers</p>
          <p className='hover:underline cursor-pointer'>Founders' Letter</p>
        </div>
        <div className='space-y-4 my-5'>
          <h5 className='font-bold pt-10 md:pt-0'>COMMUNITY</h5>

          <p className='hover:underline cursor-pointer'>
            Diversity & Belonging
          </p>
          <p className='hover:underline cursor-pointer'>Accessibility</p>
          <p className='hover:underline cursor-pointer'>Airbnb Associates</p>
          <p className='hover:underline cursor-pointer'>Frontline Stays</p>
          <p className='hover:underline cursor-pointer'>Guest Referrals</p>
          <p className='hover:underline cursor-pointer'>Airbnb.org</p>
        </div>
        <div className='space-y-4 my-5'>
          <h5 className='font-bold pt-10 md:pt-0'>HOST</h5>

          <p className='hover:underline cursor-pointer'>Host your home</p>
          <p className='hover:underline cursor-pointer'>Responsible hosting</p>
          <p className='hover:underline cursor-pointer'>
            Host an Online Experience
          </p>
          <p className='hover:underline cursor-pointer'>Resource Centre</p>
          <p className='hover:underline cursor-pointer'>Host an Experience</p>
          <p className='hover:underline cursor-pointer'>Community Centre</p>
        </div>

        <div className='space-y-4 my-5'>
          <h5 className='font-bold pt-10 md:pt-0'>SUPPORT</h5>

          <p className='hover:underline cursor-pointer'>
            Our COVID-19 Response
          </p>
          <p className='hover:underline cursor-pointer'>
            Neighbourhood Support
          </p>
          <p className='hover:underline cursor-pointer'>Airbnb Associates</p>
          <p className='hover:underline cursor-pointer'>Help Centre</p>
          <p className='hover:underline cursor-pointer'>Trust & Safety</p>
          <p className='hover:underline cursor-pointer'>Cancellation options</p>
        </div>

        <div className='flex md:hidden'></div>
      </div>

      <div className='grid md:flex items-center justify-between max-w-7xl mx-auto px-16 text-sm whitespace-nowrap mt-7 space-y-4 sm:space-y-0'>
        <div className='flex space-x-3'>
          <p className='hover:underline cursor-pointer'>© 2021 Airbnb, Inc.</p>
          <span>•</span>
          <p className='hover:underline cursor-pointer'>Privacy</p>
          <span>•</span>
          <p className='hover:underline cursor-pointer'>Term</p>
          <span className='hidden md:block'>•</span>
          <p className='hover:underline cursor-pointer hidden md:block'>
            Sitemap
          </p>
          <span className='hidden md:block'>•</span>
          <p className='hover:underline cursor-pointer hidden md:block'>
            Company details
          </p>
        </div>
        <div className='flex items-center space-x-5'>
          <div className='flex space-x-2'>
            <GlobeAltIcon className='h-5' />
            <p className='underline cursor-pointer'>English (IN)</p>
          </div>

          <div className='flex space-x-2'>
            <CurrencyRupeeIcon className='h-5' />
            <p className='underline cursor-pointer'>INR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
