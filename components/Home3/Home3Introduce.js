"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home3Introduce() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fn_cs_introduce_wrap fn_cs_lightgallery"
        data-url-show="yes"
        data-wing-switch="enable"
      >
        <div className="container">
          <div className="fn_cs_introduce">
            <span className="wing11"></span>
            <span className="wing12"></span>
            <span className="wing21"></span>
            <span className="wing22"></span>
            <div className="o_color"></div>

            <div className="content_holder">
              <div className="title_holder">
                <h5>Let Me Introduce</h5>
                <h3>Our Company</h3>
                <p>
                  Since its inception, JR Bond has been at the forefront of the
                  tile adhesive industry, bringing over a decade of experience
                  and expertise to the market. Founded on the principles of
                  innovation, quality, and customer-centricity, JR Bond has
                  consistently pushed the boundaries to deliver products that
                  meet the evolving needs of the construction and tiling
                  sectors. Our journey began with a clear mission: to create
                  adhesive solutions that not only meet but exceed industry
                  standards.
                </p>
              </div>
              <div className="badge_holder">
                <div className="title">
                  <h3>
                    World&apos;s Leading Industry
                    <br />
                    Corporation
                  </h3>
                </div>
                <div className="content">
                  <span className="year">47</span>
                  <span>years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
    </>
  );
}
