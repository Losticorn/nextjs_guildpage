"use client";

import Image from "next/image";
import { Container } from "../components/Container";
import guildImage from "../../public/Dirty_Zuk_Gta_edition.png";
import { cn } from "../../utils/cn";
import { Section } from "../Section";
import { Gallery } from "../components/Gallery";
import { Videos } from "../components/Videos";
import { Twitch } from "../components/Twitch";

export default function About() {
  return (
    <Container className={cn("flex flex-col items-center")}>
      <Container
        className={cn("max-w-[1100px] flex flex-col space-y-3 text-xl")}
      >
        <Image src={guildImage} className="max-w-[1000px] self-center" />
        <p>
          Our guild was founded at the beginning of Shadowlands by our guild
          master Zuknar. Since then, we've experienced a lot, both highs and
          lows, but each challenge has propelled our guild forward.
        </p>
        <p>
          We went from the guild, which was struggling clearing heroic to the
          guild that is consistently getting to the end game mythic bosses.
        </p>
        <p>
          All of this was possible thanks to an amazing group of people that
          were gathered here throughout the years, and hard work of our diligent
          officers.
        </p>
        <p>
          As of right now, we are very active guild with a dependable roster,
          that is aiming to achieve it's first Cutting Edge, and keep growing as
          time goes on. All of this is result of good relationships which goes
          beyond the game itself.
        </p>
        <p>Cheers! </p>
        <p>Dirty Zuk & The Boyz</p>
      </Container>
      <Section blog={false} title="Gallery">
        <Gallery />
      </Section>
      <Section blog={false} title="Videos">
        <Videos />
      </Section>
      <Section blog={false} title="Streams">
        <Twitch />
      </Section>
    </Container>
  );
}
