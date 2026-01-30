import React, { useState, useEffect } from 'react';

const FlowerGame = () => {
  const [flowers, setFlowers] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [isCollecting, setIsCollecting] = useState(false);

  const flowerEmojis = ['🌹', '🌷', '🌸', '💐', '🌺', '🌼', '🥀', '🌻'];
  const messages = [
    "I'm really sorry!",
    "Please forgive me!",
    "You mean everything to me!",
    "I'll make it up to you!",
    "I love you more!",
    "You're my world!",
    "Forgive me, my love!",
    "I promise to do better!"
  ];

  const createFlower = () => {
    const newFlower = {
      id: Date.now(),
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      x: Math.random() * 80 + 10,
      y: -20,
      size: Math.random() * 20 + 20,
      speed: Math.random() * 2 + 1,
      rotation: Math.random() * 360,
    };
    setFlowers(prev => [...prev, newFlower]);
  };

  const collectFlower = (id) => {
    setFlowers(prev => prev.filter(f => f.id !== id));
    setScore(prev => prev + 1);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCollecting) {
        createFlower();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isCollecting]);

  useEffect(() => {
    const updateFlowers = () => {
      setFlowers(prev => 
        prev.map(flower => ({
          ...flower,
          y: flower.y + flower.speed,
          rotation: flower.rotation + 1,
        })).filter(flower => flower.y < 100)
      );
    };

    const animation = setInterval(updateFlowers, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="bg-gradient-to-b from-rose-100 to-pink-100 rounded-3xl shadow-xl p-6 border-4 border-rose-200 h-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-2">
          🌸 Collect Flowers for Her 🌸
        </h2>
        <p className="text-gray-600 mb-4">
          Click on the falling flowers to collect them! Each flower is a piece of my apology.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-lg font-bold text-rose-600">Flowers Collected:</p>
            <p className="text-3xl font-bold text-rose-700">{score}</p>
          </div>
          
          <button
            onClick={() => setIsCollecting(!isCollecting)}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              isCollecting 
                ? 'bg-rose-600 text-white hover:bg-rose-700' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isCollecting ? '⏸️ Pause' : '🌼 Start Game'}
          </button>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-96 bg-gradient-to-b from-sky-50 to-blue-100 rounded-2xl border-2 border-rose-200 overflow-hidden">
        {flowers.map(flower => (
          <button
            key={flower.id}
            className="absolute transition-all duration-300 hover:scale-125 active:scale-150 focus:outline-none"
            style={{
              left: `${flower.x}%`,
              top: `${flower.y}%`,
              transform: `rotate(${flower.rotation}deg)`,
              fontSize: `${flower.size}px`,
            }}
            onClick={() => collectFlower(flower.id)}
          >
            {flower.emoji}
          </button>
        ))}
        
        {/* Score Message */}
        {message && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg animate-pulse">
            <p className="text-lg font-bold text-rose-600">{message}</p>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-200 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-3xl">🌱</div>
        <div className="absolute bottom-4 right-4 text-3xl">🌿</div>
      </div>

      {/* Game Instructions */}
      <div className="mt-6 p-4 bg-white/70 rounded-2xl">
        <h3 className="font-bold text-rose-700 text-lg mb-2">🎮 How to Play:</h3>
        <ul className="text-gray-600 list-disc list-inside space-y-1">
          <li>Click "Start Game" to begin</li>
          <li>Click on falling flowers to collect them</li>
          <li>Each flower represents my apology and love</li>
          <li>Collect as many as you can!</li>
        </ul>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>My Love Meter</span>
          <span>{Math.min(score * 10, 100)}%</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-500"
            style={{ width: `${Math.min(score * 10, 100)}%` }}
          ></div>
        </div>
        <p className="text-center text-gray-600 mt-2">
          {score < 5 ? "Just starting to apologize..." :
           score < 10 ? "My heart is full of regret..." :
           score < 20 ? "I'm truly sorry, my love..." :
           score < 30 ? "Please forgive me..." :
           "I'll never let you down again! 💕"}
        </p>
      </div>
    </div>
  );
};

export default FlowerGame;