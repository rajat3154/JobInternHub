import React from "react";

const UpdateProfileDialog = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4">
      <div className="bg-black p-8 rounded-xl shadow-2xl w-full max-w-2xl border-2 border-blue-500/50">
        {/* Header */}
        <div className="mb-6 pb-4 border-b border-blue-500/30">
          <h2 className="text-2xl font-bold text-blue-400">Update Profile</h2>
          <p className="text-sm text-gray-400 mt-1">
            Keep your information updated
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-300/90">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-800/70 border border-blue-500/30 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 text-gray-100 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-300/90">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gray-800/70 border border-blue-500/30 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 text-gray-100 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-300/90">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 bg-gray-800/70 border border-blue-500/30 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 text-gray-100 transition-all"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-300/90">
                Skills
              </label>
              <input
                type="text"
                placeholder="React, Node.js, Python"
                className="w-full px-4 py-3 bg-gray-800/70 border border-blue-500/30 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 text-gray-100 transition-all"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-blue-300/90">
              Bio
            </label>
            <textarea
              rows="4"
              placeholder="Describe your professional experience..."
              className="w-full px-4 py-3 bg-gray-800/70 border border-blue-500/30 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       placeholder-gray-500 text-gray-100 transition-all"
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-blue-300/90">
              Resume
            </label>
            <div className="flex items-center justify-center w-full bg-gray-800/70 border-2 border-dashed border-blue-500/30 rounded-lg p-6">
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  Drag and drop PDF file here
                </p>
                <p className="text-xs text-gray-500 mt-1">or</p>
                <label
                  className="cursor-pointer mt-1 inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-md 
                                  hover:bg-blue-500/30 transition-colors text-sm"
                >
                  Browse Files
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-blue-500/30">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-6 py-2.5 text-gray-300 bg-gray-700/50 rounded-lg 
                       hover:bg-gray-700 transition-colors border border-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-white bg-blue-500 rounded-lg 
                       hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileDialog;
