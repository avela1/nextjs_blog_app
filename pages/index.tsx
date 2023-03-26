import type { NextPage } from "next";
import Head from "next/head";

import { LeftSide, RightSide } from "./../components/.";

const Home: NextPage = () => {
  return (
    <div className="lg:container mx-auto lg:px-10 px-5 min-h-screen mt-16 py-3">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1  gap-6 md:gap-20 mt-2">
        
        <LeftSide />
        <div className="w-1/2">I love addanech ababe</div>
        <RightSide />
      </main>
    </div>
  );
};

export default Home;
