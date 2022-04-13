import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import  Drawer  from '@material-ui/core/Drawer'
import './App.css';
import LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import data from './data';
import { useState } from 'react';
import { queryByRole } from '@testing-library/dom';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen,setCartOpen]= useState(false)
  const ChangeHeader=(product)=>{
    console.log(product)

  }
  const onAdd = (product) => {
   // cartItems.length=77
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(exist)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ?( { ...exist, qty: exist.qty + 1 } 
          
            )
          
          : x
        )
        
      );
     
     
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
   console.log("added items")
   ChangeHeader(product)
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const getTotalItems=()=>
     cartItems.reduce((ack,item)=> ack +item.qty,0)
   const a=getTotalItems();
   console.log(a)
 // const GetAmount= cartItems.reduce(ack,item)=> ack +item.qty,0)
  return (
    <>
    <div className="wrapper">
     
     <Header countCartItems={getTotalItems()}>
    
       </Header>  
       <button onClick={()=>
       setCartOpen(true)
     }> 
     <Badge badgeContent={getTotalItems()} color="error">
       <AddShoppingCartIcon/>
     
     </Badge>
    
     </button>
</div>
<div className="wrapper">
     
        <div className="wrapper">
        <Main products={products} onAdd={onAdd}></Main>
        </div>
   <div className="item7">
   <Drawer anchor="right" open ={cartOpen} onClose={()=>{
       setCartOpen(false)
     }}>
       <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      
        </Drawer>
      
       
      </div>
      </div>
    
    </>
  );
}

export default App;
