export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI =
  'https://my-json-server.typicode.com/JuanCazarez/PDPDetail/products';
// export const productsAPI = "http://localhost:8001/api/products";
