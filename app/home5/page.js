import HomeSlider from "@/components/Home/HomeSlider";
import Home2About from "@/components/Home2/Home2About";
import Home3Service from "@/components/Home3/Home3Service";
import Home2CTA from "@/components/Home2/Home2CTA";
import Home2Hero from "@/components/Home2/Home2Hero";
import Home2Info from "@/components/Home2/Home2Info";
import Home2InfoRating from "@/components/Home2/Home2InfoRating";
import Home2Project from "@/components/Home2/Home2Project";
import Home2Service from "@/components/Home2/Home2Service";
import Home2Support from "@/components/Home2/Home2Support";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Home Beta",
};

export default function home5() {
  return (
    <>
      <Layout className={"nobglight"}>
        <HomeSlider />

        <Home2Info />

        <Home2About />

        <Home2InfoRating />

        <Home2Project />

        <Home3Service />
      </Layout>
    </>
  );
}
