"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import CountUp from "./components/CountUp/CountUp";


const Lanyard = dynamic(
  () => import("./components/Lanyard/Lanyard"),
  { ssr: false }
);

const ScrollVelocity = dynamic(
  () => import("./components/ScrollVelocity/ScrollVelocity"),
  { ssr: false }
);

const TargetCursor = dynamic(
  () => import("./components/TargetCursor/TargetCursor"),
  { ssr: false }
);

const PixelBlast = dynamic(
  () => import("./components/PixelBlast/PixelBlast"),
  { ssr: false }
);

function Home() {
  const birthDate = new Date(2007, 11, 13);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) age -= 1;

  return (
    <div>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <div className="min-h-screen overflow-x-hidden bg-[#0A192F] relative">
        <div className="absolute inset-0 w-full h-full">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#415A77"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        <div className="container mx-auto h-screen relative z-10">
          <div className="grid grid-cols-12 h-full">

            <div className="col-span-6 flex flex-col justify-center items-center h-full space-y-6 p-8">

                <div className="cursor-target flex items-center gap-2">
                  <AnimatedContent
                distance={150}
                direction="vertical"
                duration={1.2}
                ease="bounce.inout"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                  <h1 className="text-2xl text-white font-bold">My Age</h1>
              </AnimatedContent>
                  <div className="text-4xl font-extrabold text-[#64FFDA]">
                    <CountUp
                      from={0}
                      to={age}
                      separator=","
                      direction="up"
                      duration={1}
                    />
                  </div>
                </div>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="cursor-target flex items-center gap-2">
                  <h1 className="text-2xl text-white font-bold">
                    I'm Ready Jobs
                  </h1>

                  <RotatingText
                    texts={["Web Development", "AI Development", "Data Analysis"]}
                    mainClassName="px-3 bg-[#64FFDA] text-black overflow-hidden py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.05}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </div>
              </AnimatedContent>

              <div className="flex flex-col gap-1 items-center">
                <SplitText
                  text="I'm Achmad Zaenni Adriansyah"
                  className="cursor-target text-3xl font-bold text-white"
                  delay={75}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div className="flex items-center gap-3">
                  <SplitText
                    text="Full Stack Web Development"
                    className="cursor-target text-4xl font-bold text-[#2EC4B6]"
                    delay={150}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <BlurText
                text="I'm a responsive and interactive web developer from Indonesia. I love transforming complex problems into simple and beautiful designs using JavaScript technologies like React, Next.js, and Tailwind CSS. I also enjoy Python for data manipulation, and often build full-stack apps using CI3, CI4, and Laravel."
                className="cursor-target text-xl mb-8"
                delay={60}
                animateBy="words"
                direction="top"
              />
            </div>

            <div className="col-span-6 relative h-full w-full flex justify-center items-center overflow-hidden">

              <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none overflow-hidden">
                <div className="transform rotate-[-8deg]">
                  <ScrollVelocity
                    texts={["React Bits", "Scroll Down"]}
                    className="text-[#64FFDA] text-7xl font-extrabold opacity-30 select-none"
                  />
                </div>
              </div>

              <div className="relative z-10 h-full w-full flex justify-center items-center">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
