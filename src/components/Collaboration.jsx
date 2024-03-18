import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from "framer-motion";

const Collaboration = () => {
  return (
    <Section>
      <div className="container lg:flex ">
        <div className="max-w-[25rem] ">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h2 mb-4 md:mb-8"
          >
            AI Chat App for seamless collaboration
          </motion.h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
                key={item.id}
                className="mb-3 py-3"
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="mb-8 body-2  text-n-4 md:mb-16 lg:mb-32 lg:mx-auto lg:w-[22rem]"
          >
            {collabText}
          </motion.p>
          <div
            className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 
          rounded-full -translate-x-1/2 scale-75 md:scale-100"
          >
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <motion.div
                viewport={{ once: true }}
                src="your-image-url.jpg" // Replace with your image URL
                alt="Spinning Image"
                animate={{
                  rotate: [0, 360], // Rotate from 0 to 360 degrees
                }}
                transition={{
                  duration: 2, // Duration of one full rotation (in seconds)
                  repeat: Infinity, // Repeat indefinitely
                  ease: "linear", // Linear easing for constant speed
                }}
                className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full"
              >
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  className={`absolute top-0  left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                  key={item.id}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: "#CAC6DD",
                      borderRadius: "50%",
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem]  bg-n-7
                    border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      src={item.icon}
                      alt={item.title}
                      height={item.height}
                      width={item.width}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Collaboration;
