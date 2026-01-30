import React, { useState } from 'react';
import FlowerGame from './FlowerGame';
import './index.css';

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 md:p-8">
      {/* Heart Header */}
      <div className="max-w-4xl mx-auto">
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Apology Letter */}
          <div className={`flex-1 ${isLetterOpen ? '' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border-4 border-rose-200 transform transition-all duration-500 hover:scale-[1.02]">
              <div className="relative">
                <button
                  onClick={() => setIsLetterOpen(false)}
                  className="absolute top-0 right-0 text-rose-400 hover:text-rose-600 text-xl focus:outline-none"
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
                    <div className="flex justify-center mt-4 space-x-4">
                      <span className="text-3xl">❤️</span>
                      <span className="text-3xl">🥺</span>
                      <span className="text-3xl">💕</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {!isLetterOpen && (
              <button
                onClick={() => setIsLetterOpen(true)}
                className="mt-4 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none"
              >
                💖 Reopen Letter
              </button>
            )}
          </div>

          {/* Flower Game */}
          <div className="flex-1">
            <FlowerGame />
          </div>
        </div>

        {/* Cute Message at Bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic text-lg">
            Made with 💕 for the most wonderful person in my life
          </p>
          <div className="mt-4">
            <button 
              onClick={() => setIsLetterOpen(!isLetterOpen)}
              className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              {isLetterOpen ? '🎮 Play Flower Game' : '📖 Read Letter Again'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;