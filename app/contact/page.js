import Card from "../components/Card";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact us!</title>
      </Head>
      <main className="flex flex-col flex-wrap justify-center items-center max-w-[1500px] m-auto">
        <div className="text-white w-full">
          <h1 className="text-6xl py-4 text-white my-6 text-center">
            Reach out to us!
          </h1>
          <p className="text-xl rounded-3xl mb-[5rem] text-[#c7c7c7] bg-[#101010] p-6 rounded-3xl">
            If you're interested in joining us or have any questions, feel free
            to reach out to any member of the officer team <i>via </i>
            Discord. We look forward to hearing from you!
          </p>
        </div>
        <Card />
      </main>
    </>
  );
}
