import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counterData = [
  {
    num: 10,
    title: "Years in Business",
  },
  {
    num: 120,
    title: "Years in Business",
  },
  {
    num: 400,
    title: "Years in Business",
  },
  {
    num: 250,
    title: "Years in Business",
  },
];

const NumCounter = () => {
  const [ref, inView] = useInView();
  return (
    <>
      <section className="py-14 bg-c-blue-dark" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
            {counterData.map((data, i) => (
              <div className="col-span-6 md:col-span-3" key={i}>
                <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
                  {inView ? <CountUp end={data.num} duration={5} /> : 0}
                  <span>+</span>
                </h3>
                <h4 className="text-md md:text-lg text-center mt-1 text-gray-300">
                  {data.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NumCounter;
