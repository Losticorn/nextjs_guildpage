import CardPlatforms from "../components/CardPlatforms";
import classes from "../styles/Platforms.module.css";
import Head from "next/head";

export default function Platforms() {
  return (
    <>
      <Head>
        <title>Check us out!</title>
      </Head>
      <main className={classes.platforms}>
        <h1>We are everywhere!</h1>
        <p>
          As an active guild, we maintain a presence on multiple platforms. This
          approach allows us to showcase our guild effectively, and connect with
          as many like-minded gamers as possible.
        </p>
        <CardPlatforms />
      </main>
    </>
  );
}
