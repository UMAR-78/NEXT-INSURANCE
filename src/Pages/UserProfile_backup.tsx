import React, { useEffect, useState } from "react";
import axios from "axios";

interface EmailResponse {
  success: boolean;
}


const Profile: React.FC = () => {
  const [data, setData] = useState<EmailResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userUIid, setUserUid] = useState<string | null>(null);
  const [profileInfo, setProfileInfo] = useState<JSON | null>(null);

  const fetchData = async (userEmail: string): Promise<EmailResponse> => {
    try {
      const response = await axios.post<EmailResponse>(
        "/api/validateUser",
        { userEmail }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  };

  useEffect(() => {
    const userEmail = "mj223@gmail.com"; // Replace with the user's email
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    //const userUIid =  user.userUiId;
    setUserUid(user.userUiId);
    setProfileInfo(user.profileInfo);
    console.log('ProfileInfo:', profileInfo);
    console.log('UserUiId:', userUIid);
    console.log('User:', user.userEmail); 
    console.log('Token:', token);
    console.log('Inside useEffect');
    const fetchAndHandleData = async () => {
      try {
        const fetchedData = await fetchData(userEmail);
        setData(fetchedData);
      } catch (error: any) {
        setError(error.message);
      }
    };

   fetchAndHandleData();
  }, []);


  return (

    <div className="flex flex-col items-center justify-center min-h-screen">
          {data ? (      <div>
      <h1 className="text-2xl md:text-4xl font-extrabold">Welcome to Your Profile</h1>
      <p className="mt-4 text-xl">This is a protected page....{userUIid}.. {JSON.stringify(data)}</p>
      </div>) : (      <div>
      <h1 className="text-2xl md:text-4xl font-extrabold">Welcome to Your Profile</h1>
      <p className="mt-4 text-xl">This is a protected page....X</p>
      </div>) }

    </div>
  );


};

export default Profile;