import Home4Partners from "@/components/Home4/Home4Partners";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";
import { Location } from "@/public/svg/icon";
import Link from "next/link";
import ContactInfo from "../../components/UpdatedContactInfo";

export const metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <Layout>
      <Breadcumb firstChild={"Contact"} />

      <div className="industify_fn_contact">
        <div className="container">
          <div className="contact_in">
            <Home4Partners />
          </div>
          <div className=" text-white">.</div>
          {/* <div className=" w-full"> */}
          <ContactInfo />
          <div className="map_holder my-4">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
}
