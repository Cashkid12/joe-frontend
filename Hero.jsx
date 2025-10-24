import React from "react";

export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-electric mb-4">
        Joe Nthiga
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6">
        Self-taught Software Engineer & Cybersecurity Learner
      </p>
      <a
        href="#projects"
        className="bg-electric text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
      >
        View Projects
      </a>
    </section>
  );
}
