"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService } from "../../../lib/backend-api";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      console.log(formData);
      const response = await authService.login({
        username: formData.username,
        password: formData.password,
      });

      if (response.access) {
        router.push("/chatbot");
      } else {
        setError("Login successful but no access token received");
      }
    } catch (err) {
      setError(
        err.message || "Failed to sign in. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-[#fffef9] p-8 rounded-lg">
        <h2 className="text-2xl font-medium text-center mb-6 text-black">
          Sign In
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm text-gray-700">
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-gray-200"
              required
              disabled={isLoading}
              autoComplete="username"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="block text-sm text-gray-700">Password</label>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Forget Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-gray-200"
              required
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 border border-red-200 rounded-full text-gray-800 hover:bg-gray-50 transition-colors mt-6 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Not a member? </span>
          <Link href="/signup" className="text-gray-800 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
