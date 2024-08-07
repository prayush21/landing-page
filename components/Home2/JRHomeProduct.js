import { ourProducts } from "@/data";
import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

export default function JRHomeProduct() {
  return (
    <>
      <div className="fn_cs_project_sticky">
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <div className="fn_cs_sticky_section">
                <h3>
                  Our latest <span>Products</span>
                </h3>
                <p>
                  To provide exceptional services to the insurance industry and
                  thier clients, the property owner. We are committed to
                  providing the highest level of professionalism, service
                  response, and quality workmanship.
                </p>
                <Link href="/products">
                  <span className="text">View All Products</span>
                  <span className="arrow">
                    <Arrow_r className="fn__svg" />
                  </span>
                  <span className="arrow_hover">
                    <Arrow_r className="fn__svg" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="right_part">
              <div className="fn_cs_sticky_section">
                <ul>
                  {ourProducts.slice(2, 6).map(({ title, description }) => {
                    return (
                      <li key={title}>
                        <div className="item">
                          <div className="img_holder">
                            <img src="/img/thumb/560-375.jpg" alt="" />
                            <div
                              className="abs_img"
                              style={{
                                backgroundImage: "url(/img/portfolio/1.jpg)",
                              }}
                            >
                              <Link href="portfolioSinglePage1"></Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="portfolioSinglePage1">{title}</Link>
                            </h3>
                            <p>
                              <Link href="portfolioSinglePage1">
                                <span className="text">View More</span>
                                <span className="arrow">
                                  <Arrow_r className="fn__svg" />
                                </span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
