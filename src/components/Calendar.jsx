import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [daysInMonth, setDaysInMonth] = useState([]);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  // Crează calendarul pentru luna curentă
  const createCalendar = () => {
    if (currentDate instanceof Date && !isNaN(currentDate)) {
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      const firstDay = new Date(currentYear, currentMonth, 1);
      const firstDayIndex = firstDay.getDay();
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const numberOfDays = lastDay.getDate();

      const days = [];
      for (let i = 0; i < firstDayIndex; i++) {
        days.push(null); // Sloturi goale înainte de prima zi a lunii
      }

      for (let i = 1; i <= numberOfDays; i++) {
        days.push(i); // Adaugă fiecare zi a lunii
      }

      setDaysInMonth(days); // Actualizează state-ul cu zilele
    }
  };

  // Actualizează calendarul când data curentă se schimbă
  useEffect(() => {
    createCalendar();
  }, [currentDate]);

  // Mergi în luna anterioară
  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  // Mergi în luna următoare
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  // Formatează data curentă ca "Luna An"
  const formatDate = () => {
    if (currentDate instanceof Date && !isNaN(currentDate)) {
      return currentDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
    return ""; // Returnează un string gol dacă data curentă nu este validă
  };

  const isDayValid = (day) => {
    if (!day) return;
    const dayDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    return dayDate >= today;
  };

  const handleDayClick = (day) => {
    if (isDayValid(day)) {
      const selectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      onDateSelect(selectedDate);
    }
  };
  return (
    <div className="w-96 h-96 overflow-auto p-2">
      <div className="rounded-md w-full max-w-md mx-auto">
        <div className="flex justify-between items-center p-2">
          <button
            className="p-1 cursor-pointer font-semibold"
            onClick={handlePreviousMonth}
          >
            ◀
          </button>
          <div className="flex items-center">
            <p className="text-gray-800 font-bold font-merriWeather text-lg sm:text-xl">
              {formatDate()}
            </p>
          </div>
          <button
            className="p-1 cursor-pointer font-semibold"
            onClick={handleNextMonth}
          >
            ▶
          </button>
        </div>
        {/* Header cu zilele săptămânii */}
        <div className="grid grid-cols-7 text-center text-sm rounded-lg p-4">
          {daysOfWeek.map((day, index) => {
            return (
              <div
                key={index}
                className="p-1 sm:p-2 hover:text-black cursor-pointer text-center text-lg sm:text-xl"
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Zilele calendarului */}
        <div className="grid grid-cols-7">
          {daysInMonth.map((day, index) => {
            const isValidDay = isDayValid(day);

            return (
              <div
                key={index}
                className={`p-1 sm:p-2 ${
                  isValidDay
                    ? "border-2 border-columbiaBlue hover:bg-columbiaBlue hover:scale-110 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } text-center sm:text-lg`}
                onClick={() => isValidDay && handleDayClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  onDateSelect: PropTypes.func,
};
