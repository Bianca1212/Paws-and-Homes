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
      <div className="bg-columbiaBlue container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8 mt-12">
          Meet Our Team
        </h1>
        <div className="flex flex-col gap-6">
          {teamMembers.length > 0 ? (
            <>
              <Member
                // key={member.id}
                name={teamMembers[currentIndex].name}
                images={teamMembers[currentIndex].images}
                description={teamMembers[currentIndex].description}
                services={teamMembers[currentIndex].services}
              />
              <div className="flex justify-between gap-4 mt-4">
                <button
                  onClick={goToPreviousMember}
                  className="px-4 py-2 text-white rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80px"
                    height="80px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110"
                  >
                    <path
                      d="M6 12H18M6 12L11 7M6 12L11 17"
                      stroke="#71797E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextMember}
                  className="px-4 py-2 text-white rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80px"
                    height="80px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#71797E"
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
