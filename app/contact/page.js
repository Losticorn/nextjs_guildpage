import Card from "../components/Card";
import classes from "../styles/Contact.module.css";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact us!</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.contact}>
          <h1>Reach out to us!</h1>
          <p>
            If you're interested in joining us or have any questions, feel free
            to reach out to any member of the officer team <i>via </i>
            Discord. <br></br>We look forward to hearing from you!
          </p>
        </div>
        <Card />
      </main>
    </>
  );
}
