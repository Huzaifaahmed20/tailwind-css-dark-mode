import React from "react";
import bannerImage from "../assets/banner-image.png";

export default function AppBanner() {
  return (
    <div className="flex dark:bg-gulf-blue  justify-between px-28 items-center bg-denim-blue h-3/5">
      <div className="text-gulf-blue dark:text-white">
        <p className="font-medium text-xl pb-2">
          GET THINGS DONE LIKE NEVER BEFORE
        </p>
        <p className="font-bold text-6xl">Professional Writers in</p>
        <br />
        <p className="font-bold text-6xl pb-4">cost-effective price</p>
        <p className="font-bold text-xl">100% Unique & SEO-optimized content</p>
        <button className="hover:shadow text-white bg-red px-8 py-3 mt-8 rounded-full">
          Get started
        </button>
      </div>
      <img src={bannerImage} alt="bannerImage" />
    </div>
  );
}
