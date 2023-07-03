import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import img1 from './images/Black.jpg';
import img2 from './images/Red.jpg';
import img3 from './images/White.jpg';
import img4 from './images/Yellow.jpg';
import img5 from './images/Blue.jpg';
import { useState } from "react";
import Loved from "./loved";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import New from "./new";


function App() {
  
  const [lovedProducts, setLovedProducts] = useState([]);
  const [lovedNum, setLovedNum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "White",
      description:
        "A white bathing suit.",
        amount: 0,
        image: img3,
    },
    {
      id: 2,
      title: "Black",
      description:
        "A black bathing suit.",
      amount: 0,
      image: img1,
    },
    {
      id: 3,
      title: "Red",
      description:
        "A red bathing suit.",
      amount: 0,
      image: img2,
    },
    {
      id: 4,
      title: "Yellow",
      description:
        "A yellow bathing suit.",
      amount: 0,
      image: img4,
    },
    {
      id: 5,
      title: "Blue",
      description:
        "A blue bathing suit.",
      amount: 0,
      image: img5,
    },
  ]);

  const addToLoved = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if(product.amount > 0){
          alert("You already love this model. Thank you!");
        }else {
          product.amount = product.amount + 1;
        const a = lovedNum + 1;
        setLovedNum(a);
        refreshLoved();
        console.log("product id=", product.id, "amount=", product.amount);
        }        
      }
    });
  };

  const remFromLoved = (id) => {
    products.map((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount = product.amount - 1;
          const a = lovedNum - 1;
          setLovedNum(a);
          refreshLoved();
          console.log("product id=", product.id, "amount=", product.amount);
        } else {
          alert("You already hate this model...");
        }
      }
    });
  }

  const refreshLoved = () => {
    const newProducts = products.filter((product) => product.amount > 0);
    setLovedProducts(newProducts);
  };

  

  const handleAdd = (userData) => {
    const newProducts = [...products, userData];
    setProducts(newProducts);
  }; 

  
  return (
    
    <BrowserRouter>
      <NavBar lovedNum={lovedNum} />      
      
      <Routes>

      <Route path="/" element={<Products products={products} onAdd={addToLoved} onRemove={remFromLoved}/>}/>
      <Route path="/loved" element={<Loved lovedProducts={lovedProducts} />} />
      <Route path="/new" element={<New handleAdd={handleAdd} />} />

      </Routes>        

      <Footer />  
      
    </BrowserRouter>
    
  );
}



export default App;

