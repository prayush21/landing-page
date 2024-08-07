export default function JRHome2About() {
  return (
    <>
      <div className="about_section">
        {/* <!-- About Shortcode --> */}
        <div className="fn_cs_about">
          <div className="container">
            <div className="a_inner">
              <div className="leftpart">
                <div className="title_holder">
                  <h3 className="title">Founder&#39;s Statement</h3>
                  <p>
                    Welcome to JR Bond, where excellence meets innovation. For
                    20 years, we&#39;ve built a legacy of delivering top-tier
                    construction solutions, including tile adhesives, block
                    adhesives, epoxy grouts, and waterproofing products. Our
                    mission has always been to provide unparalleled quality and
                    service, driven by client feedback and a commitment to
                    precision and reliability.
                  </p>
                  <p>
                    Our diverse product lineup reflects our dedication to
                    superior performance and durability, exceeding industry
                    standards. As we celebrate two decades of success, we extend
                    our gratitude to our clients whose trust and support have
                    been central to our journey. We look forward to continuing
                    to build a future defined by excellence and innovation
                    together.
                  </p>
                </div>
                <div className="sign_holder">
                  <h3 className="name">Alan Michaelis</h3>
                  <p className="occ">Founder</p>
                </div>
              </div>
              <div className="rightpart">
                <div className="r_inner" id="scene">
                  <div className="layer border" data-depth="0.3">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <img src="/img/thumb/500-560.jpg" alt="" />
                  </div>
                  <div className="img_holder layer" data-depth="0.5">
                    <img src="/img/thumb/500-560.jpg" alt="" />
                    <div
                      className="abs_img"
                      style={{ backgroundImage: "url(/img/about/right.jpg)" }}
                    ></div>
                  </div>
                  <div
                    className="dots layer"
                    data-switch="disable"
                    data-depth="0.9"
                  >
                    <img src="/img/thumb/500-560.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /About Shortcode --> */}
      </div>
    </>
  );
}
