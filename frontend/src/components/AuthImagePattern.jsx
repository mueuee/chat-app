import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Triangle Shapes */}
      {/* Top left triangle */}
      <div
        className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      {/* Bottom right triangle */}
      <div
        className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-10"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
      />
      {/* Left vertical triangle */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 bg-white opacity-10"
        style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
      />
      {/* Bottom center triangle */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-white opacity-10"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4">{title}</h2>
        <p className="text-xl text-white opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
