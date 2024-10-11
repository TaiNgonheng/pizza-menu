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
  if(props.pizzaObj.soldOut) 
    return null;

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
  const openhour = 8;
  const closehour = 22;
  const storehour = hour >= openhour && hour <= closehour;
  console.log(storehour);

  if(!storehour)
    return(
      <h1>Closed.</h1>
    );
  
  return(
    <footer className="order">
      {storehour?(
        <Order closehour={closehour} />

      ):(
        <h2>We're happy to welcome you between {openhour}:00 and {closehour}:00.</h2>
      )}
    </footer>
  );
}

function Order(props){
  return(
    <div className="order">
      <p>We're Open until {props.closehour}:00</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

