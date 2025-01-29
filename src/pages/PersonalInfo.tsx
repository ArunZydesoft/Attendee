import React from "react";
import BannerImage from "../components/BannerImage";
import PersonalInfoForm from "../components/PersonalInfoForm";
import Stepper from "../components/Stepper"

const PersonalInfo: React.FC = () => {
  return (
    <div className="h-screen bg-white-100 ">
      <div className="flex h-full mx-auto">
        {/* Left Section */}
        <div
          className="w-1/2 text-white flex flex-col items-center justify-center relative"
          style={{ background: "#F3F4F7" }}
        >
          <BannerImage></BannerImage>
        </div>

        {/* Right Section  */}
        <div
          className="w-1/2 flex flex-col items-center justify-center h-fit"
          style={{ background: "linear-gradient(#FFF 0%, #F3F4F7 100%)" }}
        >
          <div>
            <Stepper activeItem={1} />
          </div>
          <div className="grid gap-2 lg:grid-cols-1 lg:grid-rows-1 w-3/4">
            <p className="mt-2 text-2xl text-gray-950 max-lg:text-center">
              Personal information
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              *are required to continue
            </p>
          </div>

          <PersonalInfoForm />

          <div className="pointer-events-none mt-12 sm:mt-12 grid gap-4">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
