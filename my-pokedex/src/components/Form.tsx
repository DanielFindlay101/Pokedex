import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import { useSignIn } from "../hooks/useSignIn";

interface FormProps {
  child: string;
}

export default function Form({ child }: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signUp, error } = useSignUp();
  const { signIn } = useSignIn();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (child === "Signup") {
      signUp(email, password, username);
    } else {
      signIn(email, password);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-screen items-center bg-blue-300 p-6">
      {child === "Signup" ? (
        <h1 className="text-2xl font-bold">Signup today</h1>
      ) : (
        <h1 className="text-2xl font-bold">Login to your account</h1>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        {child === "Signup" && (
          <label className="input w-full flex items-center gap-2 max-w-xs bg-slate-50 border-blue-300">
            <UserIcon className="w-5 h-5" />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        )}
        <label className="input w-full flex items-center gap-2 max-w-xs bg-slate-50 border-blue-300">
          <EnvelopeIcon className="w-5 h-5" />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input w-full flex items-center gap-2 max-w-xs bg-slate-50 border-blue-300">
          <LockClosedIcon className="w-5 h-5" />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="bg-yellow-100 p-4 rounded-md hover:bg-yellow-200">
          {child}
        </button>
        {error && (
          <p className="text-red-500">
            There was an error when trying to log in
          </p>
        )}
      </form>
    </div>
  );
}
