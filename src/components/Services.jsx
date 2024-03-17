import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { motion, spring } from "framer-motion";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="contpainer">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave inlocks the potencial of AI-powered applications"
        />
        <div className="relative">
          <div
            className="relative z-1 flex  items-center h-[39rem] mb-5 p-8 border border-n-1/10
rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 
            xl:w-auto"
            >
              <motion.img
                animate={{ translateX: -500 }}
                whileInView={{
                  translateX: 0,
                  transition: {
                    duration: 5,
                    type: "spring",
                  },
                }}
                transition={{ duration: 2 }}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Smartest AI"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="relative z-1 max-w-[17rem] ml-auto"
            >
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potencial of AI-powered applications
              </p>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="body-2 "
              >
                {brainwaveServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}{" "}
              </motion.ul>
            </motion.div>
            <Generating
              className="absolute left-4 ring-4 bottom-4 border-n-1/10 border
            lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ left: -150, opacity: 0 }}
              whileInView={{ left: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl
            overflow-hidden"
            >
              <div className="absolute inset-0 ">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0
              to-n-8/9 lg:p-15"
              >
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </motion.div>
            <motion.div
              initial={{ translateX: 300, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The word&apos;s most powerfull AI photo and video art
                  generation engine. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden
              md:h-[25rem]"
              >
                <img
                  src={service3}
                  alt="Scary robot"
                  className="w-full h-full object-cover
                "
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </motion.div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};
export default Services;
