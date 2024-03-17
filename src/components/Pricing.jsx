import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div
            className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2
          pointer-events-none"
          >
            <motion.img
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10 ">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details{" "}
          </a>
        </div>
      </div>
    </Section>
  );
};
export default Pricing;
