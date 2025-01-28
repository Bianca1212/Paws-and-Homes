import { useState } from "react";
import { useTeamMembers } from "../../../hooks/useTeamMembers";
import { NavigationLayout } from "../../../layouts/NavigationLayout";
import { Member } from "./Member";

export const Team = () => {
  const { teamMembers } = useTeamMembers();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPreviousMember = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <NavigationLayout>
      <div className="bg-white container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8 mt-12">
          Meet Our Team
        </h1>
        <div className="flex flex-col gap-6 items-center">
          {teamMembers.length > 0 ? (
            <>
              <div className="relative max-w-lg w-full bg-gray-400 p-6 rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <Member
                    // key={teamMembers[currentIndex].id}
                    name={teamMembers[currentIndex].name}
                    images={teamMembers[currentIndex].images}
                    description={teamMembers[currentIndex].description}
                    services={teamMembers[currentIndex].services}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-6 w-full max-w-xs">
                <button
                  onClick={goToPreviousMember}
                  className="px-6 py-3 text-white rounded-full bg-gray-400 hover:bg-gray-600 transition duration-200 transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110"
                  >
                    <path
                      d="M6 12H18M6 12L11 7M6 12L11 17"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextMember}
                  className="px-6 py-3 text-white rounded-full bg-gray-400 hover:bg-gray-600 transition duration-200 transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <p className="text-center col-span-full">No members available.</p>
          )}
        </div>
      </div>
    </NavigationLayout>
  );
};
