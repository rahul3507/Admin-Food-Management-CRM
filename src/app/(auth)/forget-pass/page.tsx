/** @format */

import { ForgetPassForm } from "@/components/authentication/forget-pass-form";
import LeftIllustration from "@/components/authentication/leftIllustration";

export default function ForgetPass() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Illustration */}
        <LeftIllustration />

        {/* Right side - Sign In Form */}
        <ForgetPassForm />
      </div>
    </div>
  );
}
