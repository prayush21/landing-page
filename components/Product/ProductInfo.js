"use client";

import { ourProducts } from "@/data";
import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductInfo() {
  const { product, category } = useParams();

  const categoryData = ourProducts.find((product) => product.id === category);

  const categoryDetails = ourProducts.find((cat) => cat.id === category);

  const productInfo = categoryDetails.subProducts.find(
    (prod) => prod.id == product
  );

  const renderContent = (contentType, content) => {
    switch (contentType) {
      case "paragraph":
        return <div>{content}</div>;
      case "unordered_list":
        return (
          <ul
            // style={{ paddingLeft: "0px !important", paddingRight: 0 }}
            className="m-0"
          >
            {content.split("\n").map((item, index) => (
              <li key={index}>{item.replace(/^–\s*/, "")}</li>
            ))}
          </ul>
        );
      case "ordered_list":
        return (
          <ol className="m-0">
            {content.split("\n").map((item, index) => (
              <li key={index}>{item.replace(/^\(\d+\)\s*/, "")}</li>
            ))}
          </ol>
        );
      case "table":
        return (
          <div className="overflow-x-auto my-4">
            {content.title}
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  {content.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 border-b-2 w-min border-gray-300 text-left text-nowrap leading-4 text-gray-800 tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 border-b border-gray-200 "
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner product_details">
            {/* Main Sidebar: Left  */}
            <div className="industify_fn_leftsidebar">
              {/* Single Service  */}
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  <Image
                    width={1000}
                    height={1000}
                    src={productInfo?.image}
                    alt=""
                  />
                </div>

                {/* Call to Action Shortcode (with corner)  */}
                {/* <div className="fn_cs_call_to_action corner">
                  <div className="container">
                    <div className="cta_holder">
                      <div className="title_holder">
                        <h3>Industify LLC</h3>
                        <p>
                          We build your dream house. Contact us for detailed
                          information.
                        </p>
                      </div>
                      <div className="link_holder">
                        <Link href="/contact">Our Responsibility </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* /Call to Action Shortcode (with corner)  */}

                {/* Get Random Services  */}
                {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
                <div
                  data-html="includes/random-service"
                  data-index="9"
                  data-count="2"
                ></div>
                {/* /Get Random Services  */}
              </div>
              {/* /Single Service  */}
            </div>
            {/* /Main Sidebar: Left  */}

            {/* Main Sidebar: Right  */}
            <div className="industify_fn_rightsidebar">
              <div className="product-description flex flex-col gap-5 mb-10 px-2 sm:px-0">
                <div className=" text-5xl font-semibold text-theme-dark-cyan">
                  {productInfo?.title}
                </div>
                {productInfo.details?.map(
                  ({ label, contentType, content }, index) => {
                    return (
                      <div key={index}>
                        <div className="label font-semibold text-theme-dark-cyan text-lg">
                          {label}
                        </div>
                        {renderContent(contentType, content)}
                      </div>
                    );
                  }
                )}
              </div>

              {/* Check List Shortcode  */}
              {productInfo.features && productInfo.features.length > 0 && (
                <div className="fn_cs_check_list">
                  <div className="text-3xl font-semibold mb-5">
                    Product Features
                  </div>
                  <div className="list">
                    <ul>
                      {productInfo.features?.map((feature, index) => (
                        <li key={index}>
                          <div className="item">
                            <Check className="fn__svg text-theme-dark-cyan" />
                            <p>{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Check List Shortcode  */}

              {/* Get Sidebar  */}

              {/* /Get Sidebar  */}
            </div>
            {/* Main Sidebar: Right  */}
          </div>
          <div className="w-full min-h-56 related_products">
            <div className="m-0 p-0 text-6xl text-[#041230] font-light pb-3.5 mb-8">
              Related Products
            </div>
            <div className="industify_fn_leftsidebar">
              <ul className="industify_fn_service_list grid grid-cols-2 gap-8">
                {categoryData.subProducts.map((item) => {
                  return (
                    <div className="" key={item.id}>
                      <div className="item">
                        <div className="item_in">
                          <div className="img_holder">
                            <div
                              className="img_abs"
                              style={{
                                backgroundImage: `url(${item.image})`,
                              }}
                            ></div>
                            <Link
                              href={`/products/${categoryData.id}/${item.id}`}
                            ></Link>
                          </div>
                          <div className="title">
                            <h3>
                              <Link
                                href={`/products/${categoryData.id}/${item.id}`}
                              >
                                {item.title.toUpperCase()}
                              </Link>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                          <div className="read_more">
                            <Link
                              href={`/products/${categoryData.id}/${item.id}`}
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* Products List Component */}
          </div>
          <div>.</div>
        </div>
      </div>
    </>
  );
}
