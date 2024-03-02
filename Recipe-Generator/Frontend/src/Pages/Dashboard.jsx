import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlusCircle,
  faUserCircle,
  faUtensils,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import breakfast from "../assets/3924822_12690.png";

import burger from "../assets/78178774_Fresh beef burger isolated -4.png";

import biryani from "../assets/biryani.png";
import momos from "../assets/momos.png";
import roll from "../assets/roll.png";
import tea from "../assets/tea.png";

export default function Dashboard() {
  const RecipeCard = ({ image, name, time }) => (
    <div className="recipe-card min-w-32 bg-slate-200 rounded-md overflow-hidden">
      <div className="bg-white">
        <img
          src={image} // Replace with actual image source
          alt={name}
          className="w-full object-cover mb-0 rounded-t-md justify-center"
        />
      </div>
      <div className="p-2">
        <p className="font-semibold text-sm text-center">{name}</p>
        <p className="text-gray-500 text-center">{time}</p>
      </div>
    </div>
  );

  return (
    <div className="glassmorphism-bg">
      <div className="pt-12 md:pt-52 p-3 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 font-medium text-2xl">Good Morning</p>
          <h1 className="text-4xl font-bold mb-4">Get Your Recipes</h1>
          <div className="mt-3 w-full flex flex-row items-center">
            <input
              type="text"
              placeholder="Search for recipes"
              className="border py-3 rounded-md p-4 w-full focus:outline-none"
            />
            <div className="ml-1 p-3 px-5 bg-orange-500 rounded hover:bg-orange-600">
              <FontAwesomeIcon icon={faSearch} color="white" />
            </div>
          </div>

          <section className="mt-8 glassmorphism-bg p-4 ">
            <h2 className="text-lg font-bold mb-4">
              What are you looking for?
            </h2>
            <div className="flex flex-row text-sm overflow-x-auto ">
              <div className="mr-2 min-w-20">
                <div className="bg-white rounded-full shadow-lg p-1 w-full">
                  <img src={breakfast} alt="" width={130} />
                </div>
                <p className="text-center p-1.5">Breakfast</p>
              </div>
              <div className="mr-2 min-w-20">
                <div className="bg-white rounded-full shadow-lg p-1 w-full">
                  <img src={biryani} alt="" width={130} />
                </div>
                <p className="text-center p-1.5">Lunch</p>
              </div>
              <div className="mr-2 min-w-20">
                <div className="bg-white rounded-full shadow-lg p-1">
                  <img src={tea} alt="" width={130} />
                </div>
                <p className="text-center p-1.5">Tea</p>
              </div>
              <div className="mr-2 min-w-20">
                <div className="bg-white rounded-full shadow-lg p-2">
                  <img src={burger} alt="" width={120} />
                </div>
                <p className="text-center p-1.5">Snacks</p>
              </div>
              <div className="mr-2 min-w-20">
                <div className="bg-white rounded-full shadow-lg p-1">
                  <img src={roll} alt="" width={130} />
                </div>
                <p className="text-center p-1.5">Dinner</p>
              </div>
            </div>
          </section>

          <section className="mt-8 glassmorphism-secondary p-4 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">What's for breakfast</h2>
            <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 mb-2">
              <RecipeCard
                image={biryani}
                name="Chicken Biryani"
                time="13 mins"
              />
              <RecipeCard image={momos} name="Chicken Momo" time="13 mins" />
              <RecipeCard image={roll} name="Chicken Roll" time="13 mins" />
            </div>
          </section>

          <section className="mt-8 glassmorphism-secondary p-4  bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Recent Recipe</h2>
            <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 mb-2">
              <RecipeCard image={burger} name="Veg Burger" time="13 mins" />

              <RecipeCard image={roll} name="Chicken Roll" time="13 mins" />
              <RecipeCard image={momos} name="Chicken Momo" time="13 mins" />
            </div>
          </section>
          <div className="glassmorphism-secondary flex flex-col justify-center p-4  mt-8 mb-24">
            <p className="text-xl p-2 font-semibold">
              Not Sure What you want to cook?
            </p>
            <button
              className="bg-orange-500 text-white border w-full py-2 px-6 md:px-8 rounded-lg border-transparent font-extrabold text-lg shadow mb-4 hover:bg-orange-600"
              aria-label="Login"
            >
              Suggest me
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full h-16 bg-white border-t border-gray-300 flex justify-around items-center md:hidden">
        <div className="text-center">
          <FontAwesomeIcon icon={faHome} size="2x" color="#D2D2D2" />
          <p className="text-sm">Home</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faUtensils} size="2x" color="#D2D2D2" />
          <p className="text-sm">Recipes</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPlusCircle} size="2x" color="#D2D2D2" />
          <p className="text-sm">Add Recipe</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faUserCircle} size="2x" color="#D2D2D2" />
          <p className="text-sm">Profile</p>
        </div>
      </div>
    </div>
  );
}
