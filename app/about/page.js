import Home2About from "@/components/Home2/Home2About";

import Home3Introduce from "@/components/Home3/Home3Introduce";
import Home2Service from "@/components/Home2/Home2Service";
import Home2Service2 from "@/components/Home2/Home2Service2";
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
        <Home2About />
        <Home2Service />
        <Home2Service2 />
      </Layout>
    </>
  );
}
