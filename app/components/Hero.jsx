import { Container } from "./Container";
import { WelcomeBanner } from "./WelcomeBanner";
import { WelcomeBannerButtons } from "./WelcomeBannerButtons";

export const Hero = () => {
  return (
    <Container className="flex flex-row justify-between w-full py-10">
      <WelcomeBanner />
      <WelcomeBannerButtons />
    </Container>
  );
};

//all of this should be as home page
