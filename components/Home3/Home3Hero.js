"use client";
import Link from "next/link";
import Breadcumb from "@/layouts/breadcumb";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const headerBG = "img/hero.jpg";

export default function Home3Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_hero_header">
        <div className="container">
          <div className="content_holder max800">
            <div className="title_holder">
              <h3>Crafting Excellence, One Tile at a Time</h3>
              <p>
                At JR Bond, we are committed to delivering top-tier adhesive
                solutions that stand the test of time. With a focus on
                innovation, quality, and customer satisfaction, we have carved
                out a reputation as a leader in the tile adhesive industry. Our
                range of products, from Tile Grout to Epoxy Adhesives, is
                engineered to meet the highest standards of durability and
                performance, ensuring that every project, big or small, achieves
                lasting excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="bg_holder">
          <div
            className="o_img"
            style={{
              backgroundImage: `url(/Images/tile-about-bg-2.jpg)`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="o_color"></div>
        </div>
      </div>
    </>
  );
}
