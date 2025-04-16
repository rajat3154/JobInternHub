import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ChevronRight, Check, User, Briefcase, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Login from "./Login";
import RecruiterSignup from "../RecruiterSignup";
import StudentSignup from "../StudentSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({});
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: "Welcome", icon: <User size={18} /> },
    { id: 2, title: "Select Role", icon: <Briefcase size={18} /> },
    { id: 3, title: "Sign Up", icon: <Check size={18} /> },
    { id: 4, title: "Login", icon: <Check size={18} /> },
  ];

  const handleNext = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsSignupComplete(false);
    handleNext();
  };

  const handleSignupSuccess = () => {
    setIsSignupComplete(true);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to CareerConnect
            </h2>
            <p className="text-gray-400 text-lg">
              Your gateway to amazing career opportunities and top talent.
            </p>
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
            >
              Get Started <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-400">
              Choose Your Path
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <button
                onClick={() => handleRoleSelect("student")}
                className={`p-8 border-2 rounded-xl transition-all duration-300 ${
                  selectedRole === "student"
                    ? "border-blue-500 bg-blue-500/10 scale-105"
                    : "border-gray-700 hover:border-blue-400 hover:bg-blue-500/5"
                }`}
              >
                <User className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-blue-400">Student</h3>
                <p className="text-gray-400 mt-2">
                  Discover your dream career opportunities
                </p>
              </button>
              <button
                onClick={() => handleRoleSelect("recruiter")}
                className={`p-8 border-2 rounded-xl transition-all duration-300 ${
                  selectedRole === "recruiter"
                    ? "border-green-500 bg-green-500/10 scale-105"
                    : "border-gray-700 hover:border-green-400 hover:bg-green-500/5"
                }`}
              >
                <Briefcase className="w-12 h-12 text-green-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-green-400">
                  Recruiter
                </h3>
                <p className="text-gray-400 mt-2">
                  Connect with top-tier talent
                </p>
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return isSignupComplete ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="inline-block p-4 rounded-full bg-green-500/20">
              <Check className="w-16 h-16 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Signup Successful!
            </h2>
            <p className="text-gray-400 text-lg">
              Your account has been created successfully
            </p>
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
            >
              Continue to Login <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        ) : selectedRole === "student" ? (
          <StudentSignup
            onSuccess={handleSignupSuccess}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <RecruiterSignup
            onSuccess={handleSignupSuccess}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800">
          <div className="grid md:grid-cols-4 gap-8 p-8">
            {/* Stepper */}
            <div className="md:border-r md:border-gray-800 pr-6">
              <div className="space-y-6">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      activeStep >= step.id
                        ? "bg-blue-500/10 border border-blue-500/30"
                        : "hover:bg-gray-800/50"
                    } cursor-pointer`}
                    onClick={() =>
                      activeStep > step.id && setActiveStep(step.id)
                    }
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activeStep >= step.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {activeStep > step.id ? <Check size={16} /> : step.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Step {step.id}</p>
                      <p className="font-medium text-blue-300">{step.title}</p>
                    </div>
                    {activeStep === step.id && (
                      <ChevronRight className="ml-auto text-blue-400 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3 p-6">
              <div className="flex items-center justify-between mb-8">
                {activeStep > 1 && (
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                  >
                    <ArrowLeft className="mr-2" /> Back
                  </Button>
                )}
                <div className="flex-1"></div>
              </div>

              {renderStepContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
