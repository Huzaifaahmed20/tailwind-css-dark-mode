import React from "react";

export default function ToggleButton({ onClick }) {
  return (
    <div onClick={onClick} class="relative cursor-pointer">
      <input type="checkbox" id="toggleB" class="sr-only" />
      <div class="block bg-gulf-blue dark:bg-white w-14 h-8 rounded-full"></div>
      <div class="dark:translate-x-full	 dot absolute left-1 top-1 bg-white dark:bg-gulf-blue w-6 h-6 rounded-full transition"></div>
    </div>
  );
}
