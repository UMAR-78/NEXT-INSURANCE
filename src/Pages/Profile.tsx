import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl md:text-4xl font-extrabold">Welcome to Your Profile</h1>
      <p className="mt-4 text-xl">This is a protected page.</p>
    </div>
  );
};

export default Profile;
