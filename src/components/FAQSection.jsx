import { useState } from "react";
import PropTypes from "prop-types";
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
    <div className="">
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

        <p className="text-xl font-semibold hover:scale-110 font-cromisom">
          {name}
        </p>
      </div>
      {isSectionOpen && (
        <div className="mx-8 my-3">
          {faqData.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer p-2"
                onClick={() => toggleAnswer(index)}
              >
                <p className="text-lg font-cromisom">{item.question}</p>
              </div>
              {activeIndex === index && (
                <div className="bg-gray-200 p-2 mt-2 rounded-lg half-width-center">
                  <div className="text-sm font-cromisom">{item.answer}</div>
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
