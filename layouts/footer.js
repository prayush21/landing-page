import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="industify_fn_footer">
        <div className="top_footer">
          <div
            className="top_footer_img"
            style={{ background: "url(/img/footer/bg.jpg)" }}
          ></div>
          {/* <!-- TRIPLE WIDGET --> */}
          <div className="footer_widget">
            <div className="container">
              <div className="inner">
                <ul className="widget_area">
                  <li>
                    <div className="item">
                      <div className="logo">
                        <Link href="/">
                          <img src="/img/logo-light.png" alt="" />
                        </Link>
                      </div>
                      <div className="textwidget">
                        <p>
                          We are focused on user-driven outcomes, we strive to
                          create meaningful connections for users through
                          considered strategy and innovation.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="wid-title">
                        <span>Business Hours</span>
                      </div>
                      <div className="industify_fn_widget_business_hours">
                        <div>
                          <ul>
                            <li>
                              <div className="day_item">
                                <span className="day">Monday-Friday:</span>
                                <span className="hours">9am to 5pm</span>
                              </div>
                            </li>
                            <li>
                              <div className="day_item">
                                <span className="day">Saturday:</span>
                                <span className="hours">10am to 3pm</span>
                              </div>
                            </li>
                            <li>
                              <div className="day_item">
                                <span className="day">Sunday:</span>
                                <span className="hours">Closed</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="wid-title">
                        <span>Helpful Links</span>
                      </div>
                      <div className="widget_nav_menu">
                        <ul className="menu">
                          <li>
                            <Link href="/portfolio">Our Products</Link>
                          </li>
                          <li>
                            <Link href="#">Disclaimer</Link>
                          </li>
                          <li>
                            <Link href="#">Showcase</Link>
                          </li>
                          <li>
                            <Link href="#">Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /TRIPLE WIDGET --> */}
        </div>
        {/* <!-- BOTTOM --> */}
        <div className="footer_bottom">
          <div className="container">
            <div className="footer_bottom_in">
              <div className="bottom_widget">
                <div className="widget_nav_menu">
                  <ul className="menu">
                    <li>
                      <Link href="/portfolio">Products</Link>
                    </li>
                    <li>
                      <Link href="#">Disclaimer</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="#" className="industify_fn_totop">
                <span className="top"></span>
                <span className="text">To Top</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- /BOTTOM --> */}
      </footer>
    </>
  );
}
