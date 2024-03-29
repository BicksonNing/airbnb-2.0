import { format, isValid, parse } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import InfoCard from "../components/search/InfoCard";
import Map from "../components/search/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMM yyyy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yyyy");

  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mb-6'>Stays in {location}</h1>
          <div className='hidden lg:inline-flex mb-6 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          <div className='w-full border-t mb-3' />

          <div className='flex flex-col space-y-10 mb-10'>
            {searchResults.map(
              (
                {
                  description,
                  img,
                  lat,
                  long,
                  location,
                  price,
                  star,
                  title,
                  total,
                },
                i
              ) => (
                <InfoCard
                  key={i}
                  img={img}
                  description={description}
                  lat={lat}
                  long={long}
                  location={location}
                  price={price}
                  star={star}
                  title={title}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className='hidden lg:inline-flex lg:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
