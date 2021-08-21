import Head from "next/head";
import Banner from "../components/banner/Banner";
import LargeCard from "../components/explore/LargeCard";
import MediumCard from "../components/explore/MediumCard";
import SmallCard from "../components/explore/SmallCard";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-5 sm:px-16'>
        <section className='py-6'>
          <h2 className='text-3xl font-bold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.map(({ img, location, distance }, i) => (
              <SmallCard
                key={i}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section className='py-6'>
          <h2 className='text-3xl font-bold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ title, img }, i) => (
              <MediumCard key={i} title={title} img={img} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg'
          title='Try hosting'
          description='Earn extra income and unlock new opportunities by sharing your space'
          buttonText='Learn more'
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
