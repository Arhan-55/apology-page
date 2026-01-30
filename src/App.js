import React, { useState } from 'react';
import FlowerGame from './FlowerGame';
import './index.css';

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setIsLetterOpen(true);
    }, 800); // Delay letter opening for envelope animation
  };

  const handleCloseLetter = () => {
    setIsLetterOpen(false);
    setTimeout(() => {
      setIsEnvelopeOpen(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 md:p-8">
      {/* Heart Header */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 animate-pulse-gentle">
            💝 For My Love 💝
          </h1>
          <div className="flex justify-center space-x-4 mb-6">
            {['🌹', '🌷', '🌸', '💐', '🌺'].map((emoji, i) => (
              <span key={i} className="text-3xl animate-float" style={{animationDelay: `${i * 0.3}s`}}>
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Envelope Section */}
        <div className="mb-12">
          <div className="flex justify-center">
            {/* Envelope Container */}
            <div 
              className={`relative cursor-pointer transition-all duration-700 ${
                isEnvelopeOpen ? 'scale-75 -translate-y-8' : 'hover:scale-105'
              }`}
              onClick={!isEnvelopeOpen ? handleEnvelopeClick : undefined}
            >
              {/* Envelope Back */}
              <div className="w-64 h-40 bg-rose-400 rounded-lg shadow-xl"></div>
              
              {/* Envelope Front */}
              <div className={`absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg shadow-2xl transition-all duration-700 ${
                isEnvelopeOpen ? 'transform -rotate-180 opacity-0' : ''
              }`}>
                {/* Envelope Flap */}
                <div className="absolute -top-10 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-b-[60px] border-l-transparent border-r-transparent border-b-rose-600"></div>
                
                {/* Envelope Heart */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-4xl">
                  💌
                </div>
                
                {/* "Click Me!" Text */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="inline-block bg-white/90 px-4 py-2 rounded-full">
                    <p className="text-rose-700 font-bold text-lg animate-bounce">Click Me!</p>
                  </div>
                </div>
              </div>
              
              {/* Letter inside envelope */}
              <div className={`absolute top-0 left-0 w-64 h-40 bg-white rounded-lg shadow-lg p-4 transition-all duration-500 ${
                isEnvelopeOpen ? 'opacity-100' : 'opacity-0 transform translate-y-10'
              }`}>
                <div className="h-full border-2 border-dashed border-rose-300 rounded flex items-center justify-center">
                  <p className="text-rose-600 font-semibold text-center">
                    A heartfelt letter for you...
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          {!isEnvelopeOpen && (
            <p className="text-center text-gray-600 mt-6 text-lg">
              Click on the envelope to open my apology letter 💖
            </p>
          )}
        </div>

        {/* Letter Modal */}
        {isLetterOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="relative p-6 md:p-8">
                <button
                  onClick={handleCloseLetter}
                  className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 text-2xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                >
                  ✕
                </button>
                
                <div className="text-center mb-6">
                  <span className="text-rose-500 text-6xl">💌</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mt-4">
                    My Dearest Love,
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p className="indent-8">
                    I'm writing this with a heart full of regret for not being there today as promised.
                    I know how much it meant to you, and I'm truly sorry for letting you down.
                  </p>
                  
                  <p className="indent-8">
                    Every moment with you is precious to me, and I hate that I missed out on one of those moments.
                    You deserve someone who keeps their word, and I promise to be better for you.
                  </p>
                  
                  <p className="indent-8">
                    You're the most amazing person in my life, and seeing you upset breaks my heart.
                    I hope you can find it in your heart to forgive me. I'll make it up to you, I promise.
                  </p>
                  
                  <p className="indent-8">
                    Please know that I love you more than words can express, and I'm deeply sorry for any hurt I've caused.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-rose-100">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-rose-600 mb-2">
                      Forever yours,
                    </p>
                    <p className="text-lg text-gray-600">
                      Your sorry but loving boyfriend
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flower Game Below */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-2">
              🌸 Collect Flowers as My Apology 🌸
            </h2>
            <p className="text-gray-600">
              Each flower represents how sorry I am. Collect them all!
            </p>
          </div>
          <FlowerGame />
        </div>

        {/* Cute Message at Bottom */}
        <div className="text-center">
          <p className="text-gray-600 italic text-lg mb-4">
            Made for Vinuu, the most wonderful person in my life 💖
          </p>
          
          {isEnvelopeOpen && !isLetterOpen && (
            <button 
              onClick={() => setIsLetterOpen(true)}
              className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4"
            >
              📖 Read Letter Again
            </button>
          )}
          
          <div className="mt-6">
            <button 
              onClick={handleCloseLetter}
              className="text-rose-500 hover:text-rose-700 font-semibold transition-colors duration-300"
            >
              Close Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;