import CardPlatforms from "../components/CardPlatforms";
import Head from "next/head";

export default function Platforms() {
  return (
    <>
      <Head>
        <title>Check us out!</title>
      </Head>
      <main className="flex flex-col flex-wrap m-auto items-center max-w-[1500px] text-white">
        <h1 className="text-6xl py-4 text-white my-6">We are everywhere!</h1>
        <p className="text-xl text-[#c7c7c7] leading-10 bg-[#101010] p-6 rounded-3xl">
          As an active guild, we maintain a presence on multiple platforms. This
          approach allows us to showcase our guild effectively, and connect with
          as many like-minded gamers as possible.
        </p>
        <CardPlatforms />
      </main>
    </>
  );
}
