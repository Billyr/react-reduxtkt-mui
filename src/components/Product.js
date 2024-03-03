import React from 'react'
import {
  Typography,
  CircularProgress,
  Backdrop,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid
} from '@mui/material';
import { useState, useEffect } from 'react';

const Product = () => {
  const [products, getProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => {
        setShow(false);
        getProducts(result)
      })
  }, [])

  const cards = products?.map(product => (
    <Grid key={product.id} item md={4} lg={3}>
      <Card sx={{ maxWidth: '20rem' }}>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <CardMedia style={{ width: '100px', height: '130px', objectFit: 'fill' }}
            component='img'
            image={product.image}
            title={product.title}>
          </CardMedia>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button size="small">Add Product</Button>
        </CardActions>
      </Card>
    </Grid>
  ))

  return (
    <div>
      <Typography variant='h5' align='center' sx={{ pt: 1, pb: 2 }}>
        Products Dashboard
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={2} justifyContent='space-around' alignItems="center">
        {cards}
      </Grid>


      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={show}
        onClick={() => setShow(false)}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  )
}

export default Product