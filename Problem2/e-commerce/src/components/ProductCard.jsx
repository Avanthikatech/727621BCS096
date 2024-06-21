import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability}</Typography>
        <Link to={`/product/${product.productName}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
