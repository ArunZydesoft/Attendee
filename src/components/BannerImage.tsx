import goldenGateImg from "../assets/img/golden-gate-bridge-san-francisco.png";

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
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Intersec Exhibition</h1>
      </div>
    </div>
  );
};

export default BannerImage;
