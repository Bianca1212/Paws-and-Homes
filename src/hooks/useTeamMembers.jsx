import axios from "axios";
import { useEffect, useState } from "react";

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/members");
      setTeamMembers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  return { teamMembers };
};
