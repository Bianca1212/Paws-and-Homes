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
          <img src="src\assets\minus-circle.svg" alt="Minus-Circle" />
        ) : (
          <img src="src\assets\plus-circle.svg" alt="Plus-Circle" />
        )}

        <p className="text-xl font-semibold hover:scale-110 font-merriWeather text-gray-900">
          {name}
        </p>
      </div>
      {isSectionOpen && (
        <div className="mx-8 my-2">
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
                <div className="flex items-center justify-center min-h-xs">
                  <div className="bg-columbiaBlue p-6 rounded-lg max-w-xl w-full my-2">
                    <div className="font-merriWeather text-center">
                      <p>{item.answer}</p>
                    </div>
                  </div>
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
