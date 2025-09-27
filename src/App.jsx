import React, { useState } from 'react';

// The main application component for the Mantra Generator
function App() {
  // Define the array of inspirational mantras
  const mantras = [
    "I am enough.",
    "I choose joy.",
    "My mind is calm.",
    "I embrace the present moment.",
    "I am capable of achieving my goals.",
    "Today, I create my own peace.",
    "I release all fear and worry.",
    "My potential is limitless.",
    "I trust my intuition.",
    "I am grateful for all that I have."
  ];

  // State to hold the currently displayed mantra.
  const [currentMantra, setCurrentMantra] = useState(
    "Click the button to get your daily dose of inspiration!",
  );

  /**
   * Generates a random index and returns the corresponding mantra.
   * @returns {string} The randomly selected mantra text.
   */
  const getRandomMantra = () => {
    const randomIndex = Math.floor(Math.random() * mantras.length);
    return mantras[randomIndex];
  };

  /**
   * Updates the component state with a new mantra when the button is clicked.
   */
  const updateMantra = () => {
    const newMantra = getRandomMantra();
    setCurrentMantra(newMantra);
  };

  return (
    // Outer container: Full screen, centered, light background
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4 font-sans m-80">
      
      {/* Mantra Card Container */}
      <div 
        className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center 
                   border-t-4 border-indigo-500 transform transition duration-500 
                   hover:shadow-2xl hover:scale-[1.01]"
      >
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 
                       pb-2 tracking-tight m-80">
          Your Daily Mantra
        </h1>
        
        {/* Mantra Display Area */}
        <p 
          className="text-2xl italic font-medium text-gray-800 my-8 min-h-[5rem] 
                     flex items-center justify-center transition-all duration-500 
                     p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400"
        >
          {currentMantra}
        </p>

        {/* Generate Button */}
        <button 
          onClick={updateMantra}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 
                     rounded-full shadow-lg transition duration-300 ease-in-out 
                     transform hover:-translate-y-1 hover:shadow-xl focus:outline-none 
                     focus:ring-4 focus:ring-indigo-300 active:bg-indigo-800"
        >
          Generate New Mantra
        </button>
      </div>
    </div>
  );
}

export default App;
