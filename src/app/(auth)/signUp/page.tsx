/** @format */

import { RegistrationForm } from "@/components/authentication/registration-form";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#fff4f1]">
      <div className="container mx-auto ">
        <div className="text-center mb-12 pt-6">
          <h1 className="text-5xl font-bold mb-4 text[#33394c]">
            RestaurantHub
          </h1>
          <p className="text-xl text-[#666a79]">
            Join up platform and grow your business
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
