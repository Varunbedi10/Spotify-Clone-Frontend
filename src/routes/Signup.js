import React, { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverhelper";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async () => {
    if (email !== confirmEmail) {
      setError("Email addresses do not match");
      return;
    }
    setLoading(true);
    setError(null); // Clear previous errors
    const data = { email, password, username, firstName, lastName };
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        "/auth/register",
        data
      );
      if (response && !response.error) {
        console.log(response);
        alert("Registration successful!");
      } else {
        setError(response.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setError(
        "An error occurred during registration. Please try again later."
      );
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="165" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4 text-2xl">
          Sign up for free to start listening
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <TextInput
          label="Email address"
          placeholder="Email address"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email address"
          placeholder="Confirm Email address"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Username"
          placeholder="Enter Your Username"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter strong password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter Your First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter Your Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className="w-full flex items-center justify-center my-10">
          <button
            className={`bg-green-400 font-semibold p-3 px-9 rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "SIGN UP"}
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account?
        </div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
