/** @format */

import Image from "next/image";
import React from "react";

const LeftIllustration = () => {
  return (
    <div className=" items-center justify-center hidden md:flex">
      <div className=" w-full h-full flex items-center justify-center">
        <Image
          src="/authLogo.png"
          alt="Delivery person on bicycle"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default LeftIllustration;
