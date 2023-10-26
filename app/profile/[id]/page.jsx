"use client";

import { useEffect, useState } from "react";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [userPrompts, setUserPrompts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${params?.id}/prompts`);
      const data = await response.json();

      setUserPrompts(data);
      setName(data[0]?.creator.name);
    };
    if (params?.id) fetchPrompts();
  }, [params.id]);

  return (
    <Profile
      name={name}
      description={`Welcome to ${name}'s personalized profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPrompts}
    />
  );
};

export default UserProfile;