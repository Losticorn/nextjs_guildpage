import Link from "next/link";

import { cn } from "../../utils/cn";
import { FooterList } from "./FooterList";
import { Container } from "./Container";

const footerData = [
  { title: "home", items: ["news", "events"] },
  { title: "about us", items: ["gallery", "videos", "streams"] },
  {
    title: "raiding",
    items: ["history", "goals", "rules", "recruitment", "roster"],
  },
  {
    title: "contacts",
    items: ["guild master", "raid leader", "event creator", "recruiters"],
  },
  {
    title: "main platforms",
    items: ["discord", "youtube", "twitch", "warcraftlogs", "raider.io"],
  },
];

export default function Footer(): JSX.Element {
  return (
    <Container className={cn("bg-primary flex flex-col items-center")}>
      <div className="w-[1300px] py-10 flex justify-between uppercase">
        {footerData.map((list) => (
          <FooterList
            key={list.title}
            listTitle={list.title}
            items={list.items}
          />
        ))}
      </div>

      <div className="w-full bg-black">
        <p className="text-center text-xs py-2">
          &copy;{new Date().getFullYear()} Designed and Developed by
          Universalunicorn.
          <Link className="no-underline" href="/privacy">
            &nbsp;Privacy Policy.
          </Link>
        </p>
      </div>
    </Container>
  );
}
