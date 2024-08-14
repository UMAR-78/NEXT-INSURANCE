import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLanguage } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Retrieve email from the location state

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
        setError("All fields are required");
        setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
        return;
    }

    if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
        return;
    }

    setError("");
    setLoading(true);

    try {
        // Retrieve existing users from local storage
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

        // Check if email already exists
        const emailExists = existingUsers.some((user: any) => user.email === email);
        if (emailExists) {
            setError("Email already registered");
            setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
            return;
        }

        // Add new user
        const newUser = { firstName, lastName, email, password };
        existingUsers.push(newUser);

        // Save updated users array to local storage
        localStorage.setItem("users", JSON.stringify(existingUsers));

        alert("User registered successfully!");
        navigate('/login');
    } catch (err) {
        setError("An error occurred while saving data. Please try again.");
        setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
    } finally {
        setLoading(false);
    }
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
          <MdLanguage /> Español
        </a>
      </header>
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white mt-[8rem] md:mt-[10rem]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold">CREATE YOUR ACCOUNT</h1>

            {/* Display the passed email */}
            <p className="text-lg font-medium text-gray-700 mt-4">Email: {email}</p>

            <label
              htmlFor="firstName"
              className="block text-lg font-medium text-gray-700 mt-4"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label
              htmlFor="lastName"
              className="block text-lg font-medium text-gray-700 mt-4"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

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
              autoComplete="new-password"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className={`flex justify-center w-full px-4 py-4 text-base font-medium text-white border border-transparent rounded-full ${
                firstName && lastName && password
                  ? "bg-customBlue hover:bg-customLightBlue cursor-pointer"
                  : "bg-gray-400"
              }`}
              disabled={!firstName || !lastName || !password || loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
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
            Sign up with Google
          </button>
        </div>
      </div>

      <footer className="w-full md:flex items-center md:justify-between px-8 md:px-24 py-4 text-base md:text-xl bg-[#231f20] text-white">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-between">
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-customLightBlue"
          >
            <MdLanguage /> Español
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

export default SignUp;
