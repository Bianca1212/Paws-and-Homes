import { useState } from "react";
import PropTypes from "prop-types";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { Button } from "./Button";

export const FAQSection = ({ name, faqData }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <div
        className="flex flex-row gap-2 items-center cursor-pointer mx-8"
        onClick={toggleFAQSection}
      >
        {isSectionOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <path d="M16 0c8.844 0 16 7.156 16 16s-7.156 16-16 16-16-7.156-16-16 7.156-16 16-16zM16 30.031c7.719 0 14-6.313 14-14.031s-6.281-14-14-14-14 6.281-14 14 6.281 14.031 14 14.031zM14.906 17h-5.906c-0.563 0-1-0.438-1-1s0.438-1 1-1h14c0.563 0 1 0.438 1 1s-0.438 1-1 1h-8.094z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z" />
          </svg>
        )}

        <p className="text-xl font-semibold hover:scale-110 font-merriWeather text-gray-900">
          {name}
        </p>
      </div>
      {isSectionOpen && (
        <div className="mx-8 my-3">
          {faqData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-2 cursor-pointer">
                <p className="text-lg font-merriWeather">{item.question}</p>
                <Button
                  onClick={() => toggleAnswer(index)}
                  className="cursor-pointer hover:scale-110 text-lg"
                >
                  {activeIndex === index ? <FaSortUp /> : <FaSortDown />}
                </Button>
              </div>
              {activeIndex === index && (
                <div className="bg-columbiaBlue p-2 mt-2 rounded-lg half-width-center">
                  <div className="font-merriWeather">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FAQSection.propTypes = {
  name: PropTypes.string,
  faqData: PropTypes.array,
};
