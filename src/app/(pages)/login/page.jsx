"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { Logo } from "@/components/ui/Logo";
import { Card } from "@/components/ui/Card";
import { HexagonTile } from "@/components/ui/HexagonTile";
import { AuthForm } from "@/components/auth/AuthForm";

const LoginPage = () => {
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
            <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

            <AuthForm mode="login" onSubmit={handleSubmit} />

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => router.push("/signup")}
                  className="text-teal-500 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
