import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Previous from "../components/Previous";
import Upcomming from "../components/Upcomming";
import { client } from "../lib/client";
import Link from "next/link";
import Cornean from "../components/Cornean";

export default function Home({
  bannerData,
  previousMatchesData,
  upcommingMatchData,
  postsData,
}) {
  console.log(postsData);
  return (
    <div className="">
      <Head>
        <title>FC VIITORUL CORNU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Banner banner={bannerData.length && bannerData[0]} />

      <div className="grid w-full lg:w-9/12 xl:gap-4 gap-0 mx-auto mt-1 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
        {previousMatchesData?.map((match) => (
          <div key={match._id} className="hover:scale-105 transition ease-out">
            <Previous match={match} />
          </div>
        ))}
        <div className="order-first hover:scale-105 transition ease-out">
          <Upcomming match={upcommingMatchData[0]} className="" />
        </div>
      </div>

      <div className="flex flex-col lg:w-9/12 mx-auto mt-10">
        <h1 className="text-5xl text-center font-semibold text-blue-800">
          Check out the news!
        </h1>

        <div className="grid w-full  gap-0 mx-auto my-10 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
          {postsData
            .filter((item, index) => index < 3)
            .map((post) => (
              <Link key={post._id} href={`/posts/${post.slug.current}`}>
                <a>
                  <Post post={post} />
                </a>
              </Link>
            ))}
        </div>
      </div>
      <div className="">
        <Cornean />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  const previousMatchesQuery = '*[_type == "previous_matches" ]';
  const previousMatchesData = await client.fetch(previousMatchesQuery);

  const upcommingMatchQuery = '*[_type == "upcomming_match" ]';
  const upcommingMatchData = await client.fetch(upcommingMatchQuery);

  const postsQuery = '*[_type == "blogs" ]';
  const postsData = await client.fetch(postsQuery);
  return {
    props: { bannerData, previousMatchesData, upcommingMatchData, postsData },
  };
};
