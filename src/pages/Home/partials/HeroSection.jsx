import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: "url(../../../images/home/hero.jpg)",
          height: "calc(100vh - 88px)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <TypeAnimation
              sequence={[
                "Your Partner for Seamless IT Solutions",
                1000,
                "Your Partner for Seamless IT Services",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-5xl lg:text-7xl md:text-6xl font-bold leading-snug"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
