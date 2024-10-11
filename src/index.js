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
    time:10,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    time:20,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    time:15,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    time:20,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    time:15,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    time:30,
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
  const pizzas = PizzaData;
  const numpizza = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

{numpizza > 0 && <ul className="pizzas">
        {pizzas.map((pizza) => 
        <Pizza pizzaObj={pizza} key={pizza.name} />
        )}
      </ul>}

  
    </div>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <p>{props.pizzaObj.time} mn</p>
      <span>{props.pizzaObj.price +1.99}$</span>
      </div>
    </li>
  );
}

function Footer() {

  const hour = new Date().getHours();
  const openhour = 9;
  const closehour = 22;
  const storehour = hour >= openhour && hour <= closehour;
  console.log(storehour);
  return(
    <footer className="order">
      {storehour &&(
        <div className="order">
          <h3>
             We're Open Until {closehour}:00. Come visit use or order online.
          </h3>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

