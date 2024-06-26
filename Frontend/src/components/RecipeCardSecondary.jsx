import { useState } from 'react';


const RecipeCardSecondary = ({ image, name, category, area ,handleImageLoad}) => {
  const randomColorClasses = [
    "bg-purple-200",
    "bg-gray-200",
    "bg-red-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-pink-200"
  ];
  const colorIndex = Math.floor(Math.random() * 8);
  const colorIndex1 = Math.floor(Math.random() * 8);


  return (
    <div className="recipe-card bg-gray-100 hover:bg-gray-200 rounded-md overflow-hidden border border-gray-300">
      <div className="image-container bg-white flex justify-center items-center h-44 object-cover">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full w-full object-cover rounded-t-md"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="p-2">
        <div className="dish-name-container flex items-center justify-between">
          <p className="font-medium text-lg text-center mb-2 justify-center">{name}</p>
          {/* Save button icon */}
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
          </button>
        </div>
        <div className="category-area-container">
          {category && (
            <p className={`text-sm rounded-full text-center py-1 mb-2 ${randomColorClasses[colorIndex]}`}>
              {category}
            </p>
          )}
          {area && (
            <p className={`text-sm rounded-full text-center py-1 ${randomColorClasses[colorIndex1]}`}>
              {area}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSecondary;
