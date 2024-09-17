import { useEffect, useState } from "react";

// This protected page will display the user's profile information
// As a first step, we will display the user's profile information from local storage (implemented)
// In the next step, we will fetch additional information from the server (**to be implemented**)


// Function to display the user's profile information from local storage
function UserProfile() {
  const [profileInfo, setProfileInfo] = useState<JSON | null>(null);
  const [dataValidFlag, setDataValidFlag] = useState<boolean | null>(null);
  const [profileFoundFlag, setProfileFoundFlag] = useState<boolean | null>(null);
  const [userDataDisp, setUserDataDisp] = useState<JSON | null>(null);
  const [profileDataDisp, setProfileDataDisp] = useState<JSON | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      console.log("User data not found in local storage");
      setDataValidFlag(false);
    } else {
      setDataValidFlag(true);

      const userDataJson = userData ? JSON.parse(userData) : null;
      console.log(`User data from API server: ${JSON.stringify(userDataJson)}`);

      const userEmail = userDataJson.userEmail;
      setUserEmail(userEmail);
      console.log(`User email: ${userEmail}`);


      const userDataDisp: any = {
        userEmail: userDataJson.userEmail, userFirstName: userDataJson.userFirstName,
        userLastName: userDataJson.userLastName, userUiId: userDataJson.userUiId
      };
      setUserDataDisp(userDataDisp);
      console.log(`User data: ${JSON.stringify(userDataDisp)}`);

      if (!userDataJson.profileInfo.profileFoundFlag) {
        setProfileFoundFlag(false);
        console.log("Profile data not found");
      } else {
        console.log("Profile data found");
        const profileDataDisp: any = userDataJson.profileInfo;
        setProfileFoundFlag(true);
        setProfileDataDisp(profileDataDisp);
        console.log(`Profile data: ${JSON.stringify(profileDataDisp)}`);
      }
    }
  }, []);


  // Display the user's profile information - needs to be formatted properly
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {(userEmail) ? (<div><b>User email: {userEmail}</b></div>) : (<div><b>User email not available</b></div>)}
      {(dataValidFlag) ? (<div><b>Account profile data </b><br /> {JSON.stringify(userDataDisp)}</div>) : (<div><b>Account profile data not available</b></div>)}
      {(profileFoundFlag) ? (<div><b>Company profile data </b><br /> {JSON.stringify(profileDataDisp)}</div>) : (<div><b>Company profile data not available</b></div>)}

    </div>
  );


};

export default UserProfile;