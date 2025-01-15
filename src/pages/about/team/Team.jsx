import { useTeamMembers } from "../../../hooks/useTeamMembers";
import { NavigationLayout } from "../../../layouts/NavigationLayout";
import { Member } from "./Member";

export const Team = () => {
  const { teamMembers } = useTeamMembers();
  return (
    <NavigationLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8 mt-12">
          Meet Our Team
        </h1>
        <div className="flex flex-col gap-6">
          {teamMembers.length > 0 ? (
            teamMembers.map((member) => (
              <Member
                key={member.id}
                name={member.name}
                images={member.images}
                description={member.description}
              />
            ))
          ) : (
            <p className="text-center col-span-full">No members available.</p>
          )}
        </div>
      </div>
    </NavigationLayout>
  );
};
