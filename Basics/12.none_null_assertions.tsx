import React from 'react';
// None-null assertions operator
const element = document.getElementById('root')!;
element.innerHTML = '! none null assertion'


// Real life example

const PRODUCTS = [
  { name: 'Foo', id: 'foo' },
  {name: "Bar", id: 'bar'}
]

const ProductList = () => {
  const onClick = (id: string) => `Access to product page with ${id}`;

  return PRODUCTS.map(({ name, id }) => (
    <div onClick={() => onClick(id)}>{name}</div>
  ))
}

const ProductDetails = ({ id }) => {
  const product = PRODUCTS.find(({ product }) => product.id === id);
  return <div>{ product.name }</div>
}