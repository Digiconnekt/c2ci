import HeadingBanner from "../../components/Headings/HeadingBanner";
import GetInTouch from "./partials/GetInTouch";
import ServicesCard from "./partials/ServicesCard";

const Services = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner
          title="Services"
          img="https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?w=1380&t=st=1699277091~exp=1699277691~hmac=77bbab827615e53362ffa89c89a5813da8a65a81eda034d075c934b81bd69e21"
        />

        <ServicesCard />

        <GetInTouch />
      </main>
    </>
  );
};

export default Services;
