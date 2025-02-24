import { ArrowUpRightIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import goldenGateImg from "../assets/img/golden-gate-bridge-san-francisco.png";
import partner1Img from "../assets/img/partner1.png";
import partner2Img from "../assets/img/partner2.png";
import partner3Img from "../assets/img/partner3.png";
import info1Img from "../assets/img/info1.png";
import info2Img from "../assets/img/info2.png";
import info3Img from "../assets/img/info3.png";


const BannerImage = () => {
  return (
    <div>
      {/* Background Image */}
      <img
        src={goldenGateImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-10 text-left">
        <div className="flex items-center gap-4 mb-4">
          <img src={partner1Img} className="h-8" alt="Image" />
          <img src={partner2Img} className="h-8" alt="Image" />
          <img src={partner3Img} className="h-8" alt="Image" />
        </div>
        <h1 className="text-5xl font-bold mb-10">Intersec Exhibition</h1>
        <div className="mb-3 flex items-center">
          <CalendarIcon className="w-6 h-6 inline-block pr-1" />
          14-16 Jan 2025
        </div>
        <div className="mb-10">
          <MapPinIcon className="w-6 h-6 inline-block pr-1" />
          Moscone Center
        </div>
        <div className="mb-15">
          Show Information
          <ArrowUpRightIcon className="w-6 h-6 inline-block pl-1" />
        </div>
        <div className="flex items-center gap-4">
          <img src={info1Img} className="h-5" alt="Image" />
          <img src={info2Img} className="h-5" alt="Image" />
          <img src={info3Img} className="h-5" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
