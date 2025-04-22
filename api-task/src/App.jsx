import Card from './Card'
import { useEffect, useState } from 'react'

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {products.map(product => (
        <Card 
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          thumbnail={product.images[0]}
          category={product.category.name}
        />
      ))}
    </div>
  )
}

export default App
