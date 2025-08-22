"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/layout/Layout";
import { Logo } from "../components/ui/Logo";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { HexagonTile } from "../components/ui/HexagonTile";

export const AuthPage = ({ mode }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <Layout hideNavigation>
      <div className="min-h-[90vh] flex flex-col items-center justify-center relative">
        {/* Background hexagons */}
        <div className="fixed inset-0 overflow-hidden z-0 opacity-10">
          <div className="absolute top-1/4 -left-10">
            <HexagonTile size="lg" color="#A78BFA" />
          </div>
          <div className="absolute top-1/2 right-10">
            <HexagonTile size="lg" color="#FB923C" />
          </div>
          <div className="absolute bottom-1/4 left-1/3">
            <HexagonTile size="lg" color="#2DD4BF" />
          </div>
        </div>

        <div className="z-10 w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <Logo size="medium" />
          </div>

          <Card className="w-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              {mode === "login" ? "Welcome Back!" : "Join Peek"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Choose a username"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-2">
                <Button variant="primary" fullWidth size="lg">
                  {mode === "login" ? "Login" : "Sign Up"}
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center">
              {mode === "login" ? (
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => router.push("/signup")}
                    className="text-teal-500 hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => router.push("/login")}
                    className="text-teal-500 hover:underline"
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
