import classes from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>&copy;{new Date().getFullYear()} Unicorn & The Boyz</p>
    </div>
  );
}
