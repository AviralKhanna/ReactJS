/* HOOKS USED
const [variable, function] = useState(0)

    1. useCallback[function, dependencies] 
    where re- rendering is done in various places in UI we use useCallback 
    in reach. useCallback is a React Hook that lets you cache a function 
    definition between re-renders. UseCallback [function, dependencies] 
    where dependencies is an array of all dependent variables. 
    Dependencies example [number, character, setPassword].
    Method optimization usinf memoization. 
    where the chache memory is used to store.

    2. useEffect[setup, dependencies] 
    useEffect(() => {generatePassword()}, [dependencies])
    used to synchronize dependencies while re-rendering.
    Used to re-render the elements/dependencies involved.

    3. useRef used when we need a reference of some element. 
    Here used for copying the password to clipboard.
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRangel(0, 20);

*/

import React, { useState, useEffect } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  // Function to generate password dynamically
  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";
    let characterPool = chars;

    if (specialAllowed) characterPool += specialChars;
    if (numberAllowed) characterPool += numbers;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }

    setPassword(newPassword);
  };

  // Use effect to generate password on changes
  useEffect(() => {
    generatePassword();
  }, [length, specialAllowed, numberAllowed, setPassword]); // Runs whenever length, specialAllowed, or numberAllowed changes
  // setPassword
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-center bg-slate-700 text-orange-500">
        <h1 className="text-white text-xl font-bold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-gray-700"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-blue-700 text-white px-4 py-1 shrink-0 hover:bg-blue-800 transition-all"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="text-white text-sm mb-4">
          <label className="block mb-2 font-medium">
            Password Length: {length}
          </label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full cursor-pointer accent-orange-500"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="text-white text-sm mb-4">
          <label className="flex items-center gap-x-2 mb-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </>
  );
};

export default App;
