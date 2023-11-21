import MainHeading from "../../../../../components/Headings/MainHeading";
import { motion } from "framer-motion";
import { fadeInBottom, fadeInRight } from "../../../../../helpers/framerMotion";

const Features = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <MainHeading heading={"Features"} align={"center"} />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-12 md:gap-10 gap-y-10">
            <div className="col-span-6">
              <div className="grid grid-cols-12 gap-y-10 py-10">
                <motion.div
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                  className="col-span-12 h-40 bg-c-blue-light flex flex-col justify-center items-center p-10"
                >
                  <img
                    src="../../../../../../images/products/parkeze/features/feature-1.png"
                    alt="features"
                  />
                  <p className="mt-5">Using LIDAR Technology as a Basis</p>
                </motion.div>
                <motion.div
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                  className="col-span-12 h-40 bg-c-blue-light flex flex-col justify-center items-center p-10"
                >
                  <img
                    src="../../../../../../images/products/parkeze/features/feature-2.png"
                    alt="features"
                  />
                  <p className="mt-5">
                    Easy Exit Procedure with Self-Pay Station
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                  className="col-span-12 h-40 bg-c-blue-light flex flex-col justify-center items-center p-10"
                >
                  <img
                    src="../../../../../../images/products/parkeze/features/feature-3.png"
                    alt="features"
                  />
                  <p className="mt-5">Indoor Directions to Specific Slot</p>
                </motion.div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-12 gap-y-10 py-10">
                <motion.div
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                  className="col-span-12 h-64 bg-c-blue-light flex flex-col justify-center items-center p-10"
                >
                  <img
                    src="../../../../../../images/products/parkeze/features/feature-4.png"
                    alt="features"
                  />
                  <p className="mt-5">
                    Clever payment methods through integration with wallets,
                    UPIs, online payments, etc.,
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                  className="col-span-12 h-64 bg-c-blue-light flex flex-col justify-center items-center p-10 mt-2"
                >
                  <img
                    src="../../../../../../images/products/parkeze/features/feature-5.png"
                    alt="features"
                  />
                  <p className="mt-5">
                    Retailers can use the Parkeze Mobile App&apos;s dashboards
                    and management data to advertise their deals.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 md:gap-10 gap-y-10 pb-10">
            <motion.div
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              className="col-span-4 bg-c-blue-light p-10"
            >
              <img
                src="../../../../../../images/products/parkeze/features/feature-6.png"
                alt="features"
              />
              <p className="mt-5">
                Data-driven parking analytics to increase profits, lower labor
                costs, and stop revenue leaks
              </p>
            </motion.div>
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              className="col-span-8 bg-c-blue-light"
            >
              <img
                src="../../../../../../images/products/parkeze/features/features.png"
                alt="features"
                className="w-full"
              />
            </motion.div>
            <motion.div
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              className="col-span-4 bg-c-blue-light p-10"
            >
              <img
                src="../../../../../../images/products/parkeze/features/feature-7.png"
                alt="features"
              />
              <p className="mt-5">
                Adherence to local transportation authorities security protocol
              </p>
            </motion.div>
            <motion.div
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              className="col-span-4 bg-c-blue-light p-10"
            >
              <img
                src="../../../../../../images/products/parkeze/features/feature-8.png"
                alt="features"
              />
              <p className="mt-5">
                Cooperation with outside parties, such as other movie booking
                apps and applications for events booking.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              className="col-span-4 bg-c-blue-light p-10"
            >
              <img
                src="../../../../../../images/products/parkeze/features/feature-9.png"
                alt="features"
              />
              <p className="mt-5">
                Connectivity with Residential Applications: Mygate,
                Nobrokerhood, and Additional Applications for Managing Visitors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
