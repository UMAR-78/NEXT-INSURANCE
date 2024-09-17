import { useEffect, useState } from "react";

// This protected page will display the user's profile information
// As a first step, we will display the user's profile information from local storage (implemented)
// In the next step, we will fetch additional information from the server (**to be implemented**)


// Function to display the user's profile information from local storage
function UserProfile() {
  const [profileInfo, setProfileInfo] = useState<JSON | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const userDataJson = userData ? JSON.parse(userData) : null;
    console.log(userDataJson.profileInfo);

    if (userDataJson.profileInfo.profileFoundFlag) {
      setProfileInfo(userDataJson.profileInfo.data);
    }
  }, []);


  // Display the user's profile information - needs to be formatted properly
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
          {profileInfo ? (      <div>
      <h1 className="text-2xl md:text-4xl font-extrabold">Welcome to Your Profile</h1>
      <p className="mt-4 text-xl">User data to be formatted properly... {JSON.stringify(profileInfo)} </p>
      </div>) : (      <div>
      <h1 className="text-2xl md:text-4xl font-extrabold">Welcome to Your Profile</h1>
      <p className="mt-4 text-xl">This is a protected page....X</p>
      </div>) }

    </div>
  );
};

export default UserProfile;