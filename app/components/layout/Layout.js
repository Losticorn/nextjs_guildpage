import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Layout(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
