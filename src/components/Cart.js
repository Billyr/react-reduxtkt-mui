import React from 'react'
import Grid from '@mui/material/Grid';

import { useSelector } from 'react-redux';

const Cart = () => {
  const cartProducts = useSelector(state => state.Mycart);
  
  return (
    <>
      {cartProducts.length==0 && (<p>No hay items en el cart...</p>)}
      {cartProducts?.map(item => (
          <div key={item.id}>
            <p>{item.price}</p>
          </div>
        ))
      }
    </>
  )
}

export default Cart