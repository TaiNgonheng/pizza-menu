/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const PizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headerstyle={};
  return (
    <header className="header">
      <h1 style={headerstyle}>Chef Heng's Pazzy</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza name ='pizza spinaci' 
      ingredient='tomato, mozarella, spinach and ricotta cheese'
      photoName='pizzas/spinaci.jpg'
      time={15}
      price={10}
      />
      <Pizza name='pizza funghi' 
      ingredient="tomato + bay p'om and bay kdang dak saucesage"
      price = {12}
      time={20}
      photoName='pizzas/funghi.jpg'/>
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <p>{props.time}mn</p>
      <span>{props.price +1.99}$</span>
      </div>
    </div>
  );
}

function Footer() {
    
  const hour = new Date().getHours();
  const openhour = 9;
  const closehour = 22;
  const storehour = hour >= openhour && hour <= closehour;
  console.log(storehour);

  return (
    <div className="footer">
      <footer>{hour}am We're Currently Opened!!!.</footer>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);