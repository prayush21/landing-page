import Home3Blog from "@/components/Home3/Home3Blog";
import Home5Slider from "@/components/Home5/Home5Slider";
import Home3Info from "@/components/Home3/Home3Info";
import Home3Introduce from "@/components/Home3/Home3Introduce";
import Home3Principle from "@/components/Home3/Home3Principle";
import Home3Project from "@/components/Home3/Home3Project";
import Home3Service from "@/components/Home3/Home3Service";
import DesktopHeader from "@/layouts/desktop-header";
import Layout from "@/layouts/layout";
import MobileHeader from "@/layouts/mobile-header";

export const metadata = {
  title: "Home Gama",
};

export default function page() {
  return (
    <>
      <Layout className={"nobglight"}>
        <Home5Slider />

        <Home3Introduce />

        <Home3Service />

        <Home3Info />

        <Home3Principle />

        <Home3Project />

        <Home3Blog />
      </Layout>
    </>
  );
}
