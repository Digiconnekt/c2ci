import { motion } from "framer-motion";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import MainHeading from "../../../components/Headings/MainHeading";
import { fadeInRight } from "../../../helpers/framerMotion";
import GetInTouch from "../partials/GetInTouch";
import WhyChooseUs from "./partials/WhyChooseUs/WhyChooseUs";
import Benefits from "./partials/Benefits/Benefits";

const blockchainContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Blockchain"} align={"left"} />
      <MainHeading
        heading={"Creating Businesses with Secure and Decentralized Systems"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        Contact C2Ci Today C2Ci is your partner in the blockchain development
        journey. We are here to propel your company into the decentralized
        future with our cutting-edge solutions. We are always committed to our
        client’s success.
      </p>
    </motion.div>
  </>
);

const blockchainContent2 = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Blockchain"} align={"left"} />
      <MainHeading
        heading={"Creating Businesses with Secure and Decentralized Systems"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        A distributed database identified as blockchain &quot;maintains a
        continuously growing list of ordered records, called blocks.
        Cryptography is used to connect these blocks. A timestamp, transaction
        data, and a cryptographic hash of the previous block are all contained
        in each block. Get in touch with C2Ci now. In the process of developing
        blockchain technology, C2Ci is your partner. With our state-of-the-art
        solutions, we are here to help your business thrive in the decentralized
        future. Our constant goal is the success of our clients.
      </p>
    </motion.div>
  </>
);

const decentralizationContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Decentralization"} align={"left"} />
      <MainHeading
        heading={"Decentralization of blockchain technology"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        A blockchain allows the information in a database to be dispersed over
        multiple network nodes computers or other devices that are running
        blockchain software at different places. This adds redundancy and
        maintains the integrity of the data. For instance, the other nodes would
        stop someone from changing a record if they attempted to do so at one
        database instance. In this manner, no single node in the network can
        change any data stored there.
      </p>
    </motion.div>
  </>
);

const embraceFutureContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Future"} align={"left"} />
      <MainHeading
        heading={"Embrace the Future of Tech with C2Ci"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        Blockchain technology has a promising future, particularly as
        interesting new applications in the financial and medical fields start
        to take shape. If you want to work in the blockchain industry or
        contribute to the revolution, consider enrolling in a state-of-the-art
        college programme that will provide you with the necessary skills. Speak
        with C2Ci Now. Your partner in the blockchain development process is
        C2Ci. We are here to use our state-of-the-art technologies to lead your
        business into the decentralized future.
      </p>
    </motion.div>
  </>
);

const howSafeContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"How Safe"} align={"left"} />
      <MainHeading heading={"How safe is Blockchain?"} align={"left"} />
      <p className="mt-4 text-md">
        Blockchain technology uses multiple techniques to establish
        decentralized security and trust. New blocks are initially always kept
        both chronologically and sequentially. In other words, they are
        constantly appended to the block chain’s end. Previous blocks cannot be
        altered after being appended to the block chain’s end.
      </p>
      <p className="mt-2 text-md">
        Any modification to data modifies the block&apos;s hash. A modification
        in one block would affect the subsequent blocks since every block has
        the hash of the one before. The network would reject a modified block
        since the hashes would not match.
      </p>
    </motion.div>
  </>
);

const Blockchain = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Blockchain" />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={blockchainContent}
          firstDivClasses={"order-first"}
        />

        <WhyChooseUs />

        <GetInTouch />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={blockchainContent2}
          firstDivClasses={"order-last"}
        />

        <Benefits />

        <GetInTouch />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={decentralizationContent}
          firstDivClasses={"order-first"}
        />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={embraceFutureContent}
          firstDivClasses={"order-first lg:order-last"}
        />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={howSafeContent}
          firstDivClasses={"order-first"}
        />
      </main>
    </>
  );
};

export default Blockchain;
