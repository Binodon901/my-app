import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nameList=["Jahim","Bapparaj","Riaz","dekaprio"];
  const productList=[
    {name:"cake",price:"50"},{name:"pickle",price:"10"},{name:"Chocklate",price:"12"}
  ]
  const person={
    name:"Binodon hasan",
    id:17046,
  }
  const style={
    color:"red",
    backgroundColor:"yellow",
  }
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit wow it works <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>Mr.{person.name}</p>
        <h1>This is a great work id={person.id}</h1>
        <h3>complete it immediately</h3>
        <ul>
          {
          nameList.map(nayok=><li>{nayok}</li>)
          }
        </ul>
        <ul>
          {
            productList.map(product=><li>{product.name}</li>)
          }
        </ul>
        <Person product={productList[0]}></Person>
        <Person product={productList[1]}></Person>
        <Person product={productList[2]}></Person>
        <Counter></Counter>
        <User></User>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      );
    }
    function Person(props){
      const personStyle={
        border:"1px solid gray",
        borderRadius:"5px",
        backgroundColor:"lightgray",
        height:"200px",
        width:"200px",
        float:"left"

      }
      return(
    <div style={personStyle}>
    <h3>Product_name:{props.product.name}</h3>
    <h2>Price:{props.product.price}</h2>
    <button>Buy</button>
    </div>
      )
    }
    function Counter(){
      const[count,setCount]=useState(9);
      const handleIncrease=()=>{
        setCount(count+1);
      }
      return(
        <div>
          <h3>Count:{count}</h3>
          <button onClick={handleIncrease}>Increase</button>
          <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
        </div>
      )
    }
    function User(){
      const [user,setUser]=useState([]);
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUser(json))
      })
      return(
        <div>
          <h1>DynamicUser{user.length}</h1>
          <ul>
            {
            user.map(user=> <li>{user.name}</li>)
            } 
          </ul>
        </div>
      )
    }


export default App;
