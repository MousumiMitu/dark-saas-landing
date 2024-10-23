"use client";
import logo1 from "@/assets/logo-acme.png";
import logo2 from "@/assets/logo-apex.png";
import logo3 from "@/assets/logo-celestial.png";
import logo4 from "@/assets/logo-echo.png";
import logo5 from "@/assets/logo-pulse.png";
import logo6 from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
              ].map((logo: any) => (
                <Image
                  src={logo.src}
                  key={logo.src}
                  alt="logo"
                  className="h-6 w-auto"
                  width={100}
                  height={24}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
