import React from "react";
import { useState } from "react";

function Faq({ result: { id, question, answer, isOpen }, toggleQuestion }) {
  // const [show, setShow] = useState(false);

  return (
    <div className="w-3/5">
      <div
        className="flex justify-between border border-black p-5 select-none active:scale-105 transition-all cursor-pointer"
        onClick={() => toggleQuestion(id)}
      >
        <h1 className={` ${isOpen ? "text-xl font-bold" : ""}`}>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } w-6 h-6 transition duration-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <p
        className={`bg-gray-200 p-2 ${
          isOpen ? "block" : "hidden"
        } transition duration-500 "`}
      >
        {answer}
      </p>
    </div>
  );
}

export default Faq;
