import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a Software Engineering graduate with a strong interest in digital transformation and emerging technologies, I am committed to delivering structured, high-quality technical and business solutions. Through my current role as a Digital Transformation Consultant and my hands-on experience in cloud computing and AI, I have contributed to Business Process Reengineering (BPR), User Acceptance Testing (UAT), Proof of Concept (PoC) development, and professional technical documentation. With foundational expertise in AWS and Alibaba Cloud and a consulting-driven mindset, I continuously seek to enhance my skills and add value in dynamic, fast-paced environments where innovation and clarity are essential.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base"><span>Projects</span></p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">1
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base"><span>years of experience</span></p>
              </div>

            </div>

          </div>

          <form
            action="https://getform.io/f/allljgza"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>

          </form>

        </div>

      </Reveal>
    </div>
  )
}

export default Contact