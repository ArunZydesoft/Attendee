import goldenGateImg from "../assets/img/golden-gate-bridge-san-francisco.png";
import partner1Img from "../assets/img/partner1.png";
import partner2Img from "../assets/img/partner2.png";
import partner3Img from "../assets/img/partner3.png";
import info1Img from "../assets/img/info1.png";
import info2Img from "../assets/img/info2.png";
import info3Img from "../assets/img/info3.png";
import { CalendarIcon, MapPinIcon } from "lucide-react";

export default function SidebarLarge() {
  return (
    <div className="w-[40%] h-full text-white flex flex-col justify-between">
      <div
        className="flex-1 bg-cover bg-center rounded-2xl p-8"
        style={{ backgroundImage: `url(${goldenGateImg})` }}
      >
        <div className="relative  h-full overflow-y-auto z-10 justify-self-center">
          <div className="flex  items-center gap-4 mt-12">
            <img src={partner1Img} className="w-25 h-10" alt="Image" />
            <img src={partner2Img} className="w-25 h-10" alt="Image" />
            <img src={partner3Img} className="w-25 h-10" alt="Image" />
          </div>

          <h1 className="text-5xl mb-10 mt-10">Intersec Exhibition</h1>

          <div className="mt-4 text-xl flex items-center gap-2 mt-15">
            <CalendarIcon className="w-6 h-6 inline-block pr-1" />
            14-16 Jan 2025
          </div>
          <div className="mt-1 text-xl flex items-center gap-2">
            <MapPinIcon className="w-6 h-6 inline-block pr-1" />
            Moscone center
          </div>

          <button className="mt-15 text-white text-xl flex items-center gap-1">
            Show information <span>↗</span>
          </button>

          <div className="flex justify-between items-center mt-30">
            <img src={info1Img} className="w-10 h-8" alt="Image" />
            <img src={info2Img} className="w-20 h-10" alt="Image" />
            <img src={info3Img} className="w-30 h-8" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
