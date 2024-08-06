import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";

export default function ServiceSingle9() {
  let details = [
    {
      label: "Description",
      contentType: "paragraph",
      content: `FIXCON is a polymer modified grey coloured cement base powder tile adhesive`,
    },
    {
      label: "Standard",
      contentType: "unordered_list",
      content: `IS:15477 ( type-2T )
EN 12004 ( C2T )`,
    },
    {
      label: "Packing",
      contentType: "paragraph",
      content: `20kg bag`,
    },
    {
      label: "Application",
      contentType: "unordered_list",
      content: `– Ideal for fixing ceramic & vitrified tiles on wall & floor and tile on tile application on floor.
– For interior usage only.`,
    },
    {
      label: "Guideline for usage",
      contentType: "ordered_list",
      content: `(1) Pre-wetting of substrate with maximum saturation of water but be sure that saturated surface is in dry condition.
(2) Tiles should be free from dust & clean with brush.
(3) Mix the product in water slowly ( powder:water ratio 4:1 approx. by weight)
(4) Apply the paste on prepared surface and back of tile with required thickness & comb with notched trowel.
(5) Place tiles & press firmly.
(6) Remove excess paste from tile surface by using damp cloth.
(7) Tiles setting should not be disturb for first 24 hrs & then allow for further process.`,
    },
    {
      label: "Storage",
      contentType: "paragraph",
      content: `Store in a off ground, cool, dry area in factory sealed packaging, high humidity may reduce shelf life of product.`,
    },
  ];

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
      default:
        return null;
    }
  };
  return (
    <>
      <div className="industify_fn_sidebarpage product_details">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left  */}
            <div className="industify_fn_leftsidebar">
              {/* Single Service  */}
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  <img src="/img/service/single/9.jpg" alt="" />
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
                  Product Name
                </div>
                {details.map(({ label, contentType, content }, index) => {
                  return (
                    <div key={index}>
                      <div className="label font-semibold text-theme-dark-cyan text-lg">
                        {label}
                      </div>
                      {renderContent(contentType, content)}
                    </div>
                  );
                })}
              </div>

              {/* Check List Shortcode  */}
              <div className="fn_cs_check_list">
                <div className=" text-3xl font-semibold mb-5">
                  Product Features
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="item">
                        <Check className="fn__svg text-theme-dark-cyan" />
                        <p>CE Marking for Military Products</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Transparent Armor and Military Glass Testing</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Performance Testing</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Accelerated Stress Testing (AST)</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Failure Analysis for Metals and Non-Metals</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Non-Destructive Testing</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Mechanical Testing</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Aerospace Polymers and Plastics Testing</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Check className="fn__svg" />
                        <p>Aerospace Composites Testing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Check List Shortcode  */}

              {/* Get Sidebar  */}

              {/* /Get Sidebar  */}
            </div>
            {/* Main Sidebar: Right  */}
          </div>
          <div>.</div>
          <div className="w-full bg-gray-300">
            <div className="text-5xl font-semibold">Related Products</div>
            {/* Products List Component */}
          </div>
        </div>
      </div>
    </>
  );
}
