import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLanguage } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
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
        const response = await checkEmail(email);
        if (response.success) {
          setStep(2);
        } else {
          setApiError("Email not found. Redirecting to signup...");
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
        const response = await verifyPassword(email, password);
        if (response.success) {
          await login(email);
          navigate("/profile"); // Redirect to profile page
        } else {
          setApiError("Invalid login credentials. Please try again.");
        }
      } catch (err) {
        setApiError("Invalid login credentials. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const checkEmail = async (email: string) => {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const userExists = users.some((user: any) => user.email === email);
        resolve({ success: userExists });
      }, 500);
    });
  };

  const verifyPassword = async (email: string, password: string) => {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user: any) => user.email === email);
        resolve({ success: user?.password === password });
      }, 500);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex w-full fixed top-0 left-0 right-0 px-4 md:px-10 py-5 md:py-7 items-center justify-between mb-8 border-b-2 z-50 bg-white">
        <a href="/" className="text-4xl md:text-6xl font-extrabold text-customLightBlue">
          NEXT
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-gray-900 text-xl md:text-2xl hover:text-customLightBlue"
        >
          <MdLanguage /> Espanol
        </a>
      </header>
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white mt-[8rem] md:mt-[10rem]">
        {step === 1 ? (
          <form className="space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">LOG IN TO YOUR ACCOUNT</h1>
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
                autoComplete="email"
                required
                className="block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                value={email}
                onChange={handleEmailChange}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className={`flex justify-center w-full px-4 py-4 text-base font-medium text-white border border-transparent rounded-full ${
                  validateEmail(email)
                    ? "bg-customBlue hover:bg-customLightBlue cursor-pointer"
                    : "bg-gray-400"
                }`}
                disabled={!validateEmail(email) || loading}
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">ENTER YOUR PASSWORD</h1>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Password for your NEXT account
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-4 text-base font-medium text-white border border-transparent rounded-full bg-customBlue hover:bg-customLightBlue"
                disabled={loading}
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>
        )}
        {apiError && <p className="mt-2 text-sm text-red-600">{apiError}</p>}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        <div>
          <button className="flex items-center justify-center gap-4 w-full px-4 py-4 text-base font-medium text-gray-700 bg-white border border-black rounded-full shadow-sm hover:bg-black hover:text-white">
            <FcGoogle />
            Log in with Google
          </button>
        </div>
      </div>
      <div className="relative w-full h-12 md:h-20 bg-customLightBlue mt-[5rem]">
        <img
          src="./character-multiple-cobs.svg"
          alt="Decorative"
          className="absolute h-[7rem] md:h-[10rem] bottom-4 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <footer className="w-full md:flex items-center md:justify-between px-8 md:px-24 py-4 text-base md:text-xl bg-[#231f20] text-white">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-between">
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-customLightBlue"
          >
            <MdLanguage /> Espanol
          </a>
          <a href="#" className="hover:text-customLightBlue">Terms of Use</a>
          <a href="#" className="hover:text-customLightBlue">Privacy Policy</a>
        </div>
        <div className="mt-4 md:mt-0 text-center">
          <p>© 2024 Next Insurance Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
