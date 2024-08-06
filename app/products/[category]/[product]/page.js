import ServiceSingle9 from "@/components/Services/ServiceSingle9";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Product Info",
};

export default function page() {
  return (
    <Layout>
      <Breadcumb
        firstChild={"Services"}
        SecondChild={"Service Single Page 9"}
      />
      <ServiceSingle9 />
    </Layout>
  );
}
