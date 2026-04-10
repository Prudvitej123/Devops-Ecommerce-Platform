import React, { useState } from 'react';

const products = [
  { id:1, name:'Wireless Headphones', price:2499, category:'Electronics' },
  { id:2, name:'Running Shoes',       price:1899, category:'Footwear'    },
  { id:3, name:'Cotton T-Shirt',      price: 499, category:'Clothing'    },
  { id:4, name:'Smart Watch',         price:5999, category:'Electronics' },
  { id:5, name:'Backpack',            price:1299, category:'Accessories' },
  { id:6, name:'Coffee Mug',          price: 299, category:'Kitchen'     },
];

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id===product.id ? {...i,qty:i.qty+1} : i);
      return [...prev, {...product, qty:1}];
    });
  };
  const total = cart.reduce((sum,i) => sum + i.price * i.qty, 0);
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:20,fontFamily:'sans-serif'}}>
      <h1>ShopEasy — Cart ({cart.reduce((s,i)=>s+i.qty,0)}) — Rs.{total}</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        {products.map(p => (
          <div key={p.id} style={{border:'1px solid #ddd',padding:20,borderRadius:8}}>
            <h3>{p.name}</h3><p>Rs. {p.price}</p>
            <button onClick={()=>addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
