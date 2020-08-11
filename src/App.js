import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DefaultPage from './Components/Home';
import Navbar from './Components/Navbar';
import LogInfo from './Components/Customer';
import Product from './Components/Product';
import TaskInfo from './Components/todosTask'
import Error from './Components/Error';
import './Components/Style.css';
import Review from './Components/Review';

function App() {
  const InfoProduct = [
    {
      id: 1,price: 1000,photo: require("./Components/Image/chocolate.jpg"),title: "Choclate Cake",ptype: "Cake"
    },
    {
      id: 2,price: 200,photo: require("./Components/Image/venilla.jpg"),title: "Venilla",ptype: "Cake"
    },
    {
      id: 3,price: 180,photo: require("./Components/Image/blueberrey.jpg"),title: "BlueBerrey Muffin",ptype: "Muffin"
    },
    {
      id: 4,price: 350,photo: require("./Components/Image/applePieCupCake.jpg"),title: "Apple Pie Cupcakes",ptype: "Cup Cake"
    },
    {
      id: 5,price: 100,photo: require("./Components/Image/kitKatCakes.jpg"),title: "Kit Kat Cake",ptype: "Cake"
    },
    {
      id: 6,price: 200,photo: require("./Components/Image/carrotCake.jpg"),title: "Carrot Cake",ptype: "Cake"
    },
    {
      id: 7,price: 180,photo: require("./Components/Image/turtleRolls.jpg"),title: "Turtle Roll",ptype: "Rolls"
    },
    {
      id: 8,price: 150,photo: require("./Components/Image/tripleSalted.jpg"),title: "Triple Salted Cupcakes",ptype: "Cup Cake"
    },
    {
      id: 9,price: 500,photo: require("./Components/Image/blueberreyCake.jpg"),title: "Blueberrey Cake",ptype: "Cake"
    },
    {
      id: 10,price: 300,photo: require("./Components/Image/chocoCake.jpg"),title: "Choco Cake",ptype: "Cake"
    },
    {
      id: 11,price: 180,photo: require("./Components/Image/butterbeer.jpg"),title: "Butterbeer CupCake",ptype: "Cup Cake"
    },
    {
      id: 12,price: 550,photo: require("./Components/Image/peanutButter.jpg"),title: "Peanut Butter",ptype: "Rolls"
    },
  ];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiurl = 'https://reqres.in/api/users';
  useEffect(() => {                        //Hooks
    fetch(apiurl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar ProductDataMain={InfoProduct} CustomerDataMain ={items}/>
        <Switch>
          <Route exact path="/" component={DefaultPage}/>
          <Route exact path="/customer_information" component={LogInfo}/>
          <Route exact path="/product" component={Product} />
          <Route exact path="/task" component={TaskInfo} />
          <Route component={Error}/>
        </Switch>
        <Review reviewCustomer ={items}/>
      </div>
    );
  } 
}


export default App;
