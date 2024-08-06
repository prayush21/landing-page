import Layout from "@/layouts/layout";
import Sidebar from "@/layouts/sidebar";
import Link from "next/link";
import { ourProducts } from "../../data";

export const metadata = {
  title: "Services",
};

export default function page() {
  return (
    <Layout>
      {/*    <Breadcumb firstChild={"Services"} /> */}
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              <ul className="industify_fn_service_list">
                {ourProducts.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="item">
                        <div className="item_in">
                          <div className="img_holder">
                            <div
                              className="img_abs"
                              style={{
                                backgroundImage: `${item.image}`,
                              }}
                            ></div>
                            <Link href={`/products/${item.id}`}></Link>
                          </div>
                          <div className="title">
                            <h3>
                              <Link href={`/products/${item.id}`}>
                                {item.title.toUpperCase()} (
                                {item.subProducts.length})
                              </Link>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                          <div className="read_more">
                            <Link href={`/products/${item.id}`}>Read More</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="clearfix"></div>
            </div>

            <div className="industify_fn_rightsidebar">
              {/* Service List */}
              <div className="service_list_as_function">
                <div className="title">
                  <h3>Full list of Services</h3>
                </div>
                <div className="list_holder">
                  <ul>
                    {ourProducts.map((item) => {
                      return (
                        <li>
                          <Link href="/services/serviceSinglePage9">
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* /Service List */}

              {/* Get Sidebar */}
              <Sidebar />
              {/* /Get Sidebar */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
