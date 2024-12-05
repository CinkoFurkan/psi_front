import WLogo from "../../../../../../assets/img/WLogo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <img src={WLogo} alt="Logo" className="h-20 mb-4 md:mb-0 md:h-16" />
    </div>
  );
};

export default Logo;
