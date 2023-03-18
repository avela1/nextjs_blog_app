import type { NextPage } from "next";
import Head from "next/head";

import { LeftSide } from "./../components/.";

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
        <div className="w-1/4 h-80 md:flex md:flex-auto md:visible hidden bg-white">
          I love addanech ababe
        </div>
      </main>
    </div>
  );
};

export default Home;
