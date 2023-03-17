import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 flex min-h-screen flex-col items-center justify-center mt-14 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-row gap-6 md:gap-20 mt-2">
        <div className="md:w-[600px] w-[40px] h-60 bg-white">
          
          I love addanech ababe Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita, inventore impedit. Neque necessitatibus
          veritatis itaque, maiores deleniti nostrum, commodi enim, aliquam
          impedit accusantium cumque saepe. Nostrum tempore hic beatae quae.
        </div>
        <div className="w-full">I love addanech ababe</div>
        <div className="w-[600px] h-80 md:flex md:flex-auto md:visible hidden bg-white">
          I love addanech ababe
        </div>
      </main>
    </div>
  );
};

export default Home;
