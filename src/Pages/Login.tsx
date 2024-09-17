import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLanguage } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Define interfaces for the API responses
interface EmailResponse {
  success: boolean;
}

interface PasswordResponse {
  success: boolean;
  token: string;
  data: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
  };
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [apiError, setApiError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1); // Step 1 for email, Step 2 for password
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("This field is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      setLoading(true);
      setApiError("");

      try {
        const response = await checkEmailAx(email);
        if (response.success) {
          setStep(2); // Proceed to password step
        } else {
          setApiError(`Email not found. Redirecting to signup page...`);
          setTimeout(() => {
            navigate("/signup", { state: { email } }); // Pass email to signup page
          }, 2000);
        }
      } catch (err) {
        setApiError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("This field is required");
    } else {
      setError("");
      setLoading(true);
      setApiError("");

      try {
       // const response = await verifyPasswordAx(email, password);
       // if (response.success) {
          // Correcting the login function call to include both email and password
          await login(email, password);
       //   navigate("/profile"); // Redirect to profile page
     //   } else {
       //   setApiError("Invalid login credentials. Please try again.");
      //  }
      } catch (err) {
        setApiError("An error occurred while logging in.");
        console.error(err);
      }
    }
  };

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // --------------- AXIOS CALLS BEGIN ----------------

  const checkEmailAx = async (userEmail: string): Promise<EmailResponse> => {
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
/*
  const verifyPasswordAx = async (
    userEmail: string,
    userPwd: string
  ): Promise<PasswordResponse> => {
    try {
      const response = await axios.post<PasswordResponse>(
        "/api/validatePwd",
        { userEmail, userPwd }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Store the token
        return response.data;
      }
      return {
        success: false,
        token: "",
        data: { userFirstName: "", userLastName: "", userEmail: "" },
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        token: "",
        data: { userFirstName: "", userLastName: "", userEmail: "" },
      };
    }
  };
*/
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex w-full fixed top-0 left-0 right-0 px-4 md:px-10 py-5 md:py-7 items-center justify-between mb-8 border-b-2 z-50 bg-white">
        <a
          href="/"
          className="text-4xl md:text-6xl font-extrabold text-customLightBlue"
        >
          NEXT
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-gray-900 text-xl md:text-2xl hover:text-customLightBlue"
        >
          <MdLanguage /> Español
        </a>
      </header>
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white mt-[8rem] md:mt-[10rem]">
        {step === 1 ? (
          <form className="space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">
                LOG IN TO YOUR ACCOUNT
              </h1>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Email or phone number for your NEXT account
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg"
                value={email}
                onChange={handleEmailChange}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={!email || loading}
              className="w-full px-4 py-4 text-white bg-customBlue rounded-full"
            >
              {loading ? "Loading..." : "Continue"}
            </button>
            {apiError && (
              <p className="mt-2 text-sm text-red-600">{apiError}</p>
            )}
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">
                ENTER YOUR PASSWORD
              </h1>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={!password || loading}
              className="w-full px-4 py-4 text-white bg-customBlue rounded-full"
            >
              {loading ? "Loading..." : "Log In"}
            </button>
            {apiError && (
              <p className="mt-2 text-sm text-red-600">{apiError}</p>
            )}
          </form>
        )}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        <button className="flex items-center justify-center gap-4 w-full px-4 py-4 text-base font-medium text-gray-700 bg-white border border-black rounded-full">
          <FcGoogle /> Log in with Google
        </button>
      </div>
      <footer className="w-full md:flex items-center md:justify-between px-8 md:px-24 py-4 bg-[#231f20] text-white">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-customLightBlue"
          >
            <MdLanguage /> Español
          </a>
          <p>© NEXT 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
