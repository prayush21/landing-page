import JRHome2About from "@/components/Home2/JRHome2About";

import Home3Introduce from "@/components/Home3/Home3Introduce";
import ValuesComponent from "@/components/Home2/ValuesComponent";
import StrengthsComponent from "@/components/Home2/StrengthsComponent";
import Home3Hero from "@/components/Home3/Home3Hero";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Home Beta",
};

export default function home5() {
  return (
    <>
      <Layout className={"nobglight"}>
        <Home3Hero />
        <Home3Introduce />
        <JRHome2About />
        <ValuesComponent />
        <StrengthsComponent />
      </Layout>
    </>
  );
}
