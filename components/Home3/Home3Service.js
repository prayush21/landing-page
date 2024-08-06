import { Arrow_r } from "@/public/svg/icon";
import {
  Design,
  Drawing,
  Learning,
  TowerCrane,
} from "@/public/svg/service/IconService";
import Link from "next/link";

export default function Home3Service() {
  return (
    <>
      <div className="fn_cs_services_classic">
        <div className="fn_cs_main_title">
          <div className="container">
            <div className="title_holder">
              <h3>Build Strong & Build Better</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list">
            <ul>
              <li>
                <div className="item">
                  <Link href="/services/serviceSinglePage1"></Link>
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Learning className="fn__svg" />
                  </span>
                  <h3>Natural Materials</h3>
                  <p>
                    During this phase, we will work to provide a detailed
                    analysis of the project and we will establish project
                    expectations along with our clients.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link href="/services/serviceSinglePage2"></Link>
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Drawing className="fn__svg" />
                  </span>
                  <h3>Premium Qulity</h3>
                  <p>
                    The client retains an architect or engineer to design the
                    project and to prepare the necessary drawings and
                    specifications for new project.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link href="/services/serviceSinglePage4"></Link>
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Design className="fn__svg" />
                  </span>
                  <h3>Market Experience</h3>
                  <p>
                    In this section, we let clients select a design-build
                    arrangement when they want to work with one contract entity,
                    instead of several contractors and consultants.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
