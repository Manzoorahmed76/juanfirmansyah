import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function About(props) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 7,
        },
      }),
        animation2.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 4,
          },
        });
    }
    if (!inView) {
      animation.start({
        x: '-50px',
        opacity: 0,
      }),
        animation2.start({
          y: '200px',
          opacity: 0,
        });
    }
  }, [inView]);
  return (
    <section ref={ref} id="about">
      <div className="flex flex-col max-w-xs md:max-w-6xl h-screen justify-center mx-0 md:mx-auto text-left pl-10 md:pl-0 mt-20">
        <motion.div
          animate={animation}
          className="absolute max-w-2xl text-white"
        >
          <h2 className="text-4xl md:text-9xl tracking-wide font-semibold">
            About Me
          </h2>
          <div className="w-24 h-1 bg-red-500 mt-7 rounded-full"></div>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"></div>
          <div className="brightness-75 font-firacode text-sm">
            <p className="pt-8 max-w-[19rem] md:max-w-xl">
              Hello! My name is Juan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to make branded goods delivery service website
              using wordpress — turns out to do customization requires special
              skills such as HTML & CSS!
            </p>
            <p className="pt-4 max-w-[19rem] md:max-w-md">
              Fast-forward to today, and I’ve had the privilege of working
              freelance at an digital agency start-up. My main focus these days
              is building accessible, inclusive products and digital experiences
              at Upstatement for a variety of clients.
            </p>
            <p className="pt-4 max-w-[19rem] md:max-w-sm">
              I also study majoring in Information Technology. To stay updated
              with technological developments, I always learn new things. Like
              how to become a fullstack developer and on the sidelines of time,
              I usually make works with creative applications
            </p>
            <p className="pt-4 max-w-[19rem] md:max-w-sm">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
          <ul className="text-xs md:text-sm font-firacode mt-3 grid grid-cols-3 max-w-md">
            <li>▹ Javascript</li>
            <li>▹ React</li>
            <li>▹ Node.js</li>
            <li>▹ Express</li>
            <li>▹ Tailwinds</li>
            <li>▹ Mongoose</li>
            <li>▹ Figma</li>
            <li>▹ AI</li>
            <li>▹ Photoshop</li>
            <li>▹ Premiere Pro</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
