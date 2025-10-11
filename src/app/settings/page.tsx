/** @format */

"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { ChangePassModal } from "@/components/settings/ChangePassModal";

export default function SettingsPage() {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  const handleChangePasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChangePasswordModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header title="Account Settings" />

        {/* Settings Content */}

        {/* Settings Menu */}
        <div className=" w-full  flex flex-col  ">
          <Link href="/settings/personal-info">
            <div className="flex items-center w-full justify-between px-4 py-2.5 border-b-2 border-gray-300  bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 group-hover:text-gray-900">
                  Personal Information
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>

          <div
            onClick={handleChangePasswordClick}
            className="flex items-center w-full justify-between px-4 py-2.5 border-b-2 border-gray-300  bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-700 group-hover:text-gray-900">
                Change password
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </div>

          <Link href="/settings/privacy-policy">
            <div className="flex items-center w-full justify-between px-4 py-2.5 border-b-2 border-gray-300  bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 group-hover:text-gray-900">
                  privacy & policy
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>

          <Link href="/settings/terms-conditions">
            <div className="flex items-center w-full justify-between px-4 py-2.5 border-b-2 border-gray-300  bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 group-hover:text-gray-900">
                  terms & conditions
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>

          <Link href="/settings/help-support">
            <div className="flex items-center w-full justify-between px-4 py-2.5 border-b-2 border-gray-300  bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 group-hover:text-gray-900">
                  Help & Support
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>

          <Link href="/settings/faqs">
            <div className="flex items-center w-full justify-between px-4 py-2.5   bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 group-hover:text-gray-900">
                  FAQ’s
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
        </div>

        {/* Change Password Modal */}
        <ChangePassModal
          open={isChangePasswordModalOpen}
          onOpenChange={setIsChangePasswordModalOpen}
        />
      </div>
    </div>
  );
}
