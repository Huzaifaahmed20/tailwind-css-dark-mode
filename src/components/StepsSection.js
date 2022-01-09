import React from "react";
import createAccount from "../assets/create-account.png";
import orderContent from "../assets/order-content.png";

export default function StepsSection() {
  return (
    <>
      <div className="flex dark:bg-elegant-navy items-center h-2/5 justify-evenly">
        <div>
          <p className="text-grey dark:text-soft-orange font-medium text-lg">
            Simple steps to Order Content
          </p>
          <p className="text-gulf-blue dark:text-white font-bold text-4xl">
            How to Order
          </p>
        </div>
        <div className="flex space-x-10">
          <div className="bg-light-grey rounded-full h-24 w-24 flex items-center justify-center">
            <p className="text-gulf-blue font-bold text-4xl">1</p>
          </div>
          <div>
            <img src={createAccount} alt="createAccount" />
            <p className="mt-4 text-red dark:text-soft-orange font-bold text-2xl">
              Create Account
            </p>
            <p className="text-gulf-blue dark:text-white font-medium">
              Click on Order Content & Create your profile on exyWriters.com
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-elegant-navy flex space-x-10 pl-48 pb-10">
        <div className="bg-light-grey rounded-full h-24 w-24 flex items-center justify-center">
          <p className="text-gulf-blue font-bold text-4xl">2</p>
        </div>
        <div>
          <img src={orderContent} alt="orderContent" />
          <p className="mt-4 text-red dark:text-soft-orange font-bold text-2xl">
            Order Content
          </p>
          <p className="text-gulf-blue dark:text-white font-medium">
            Place your order with our "order content form" in
          </p>
        </div>
      </div>
    </>
  );
}
