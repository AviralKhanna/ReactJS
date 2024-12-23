import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
  <h1 className="bg-cyan-400 text-black p-4 rounded-xl">Tailwind Introduction!</h1>
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        "location"
      </div>
    </figcaption>
  </div>
</figure>
    </>
  );
}

export default App;
