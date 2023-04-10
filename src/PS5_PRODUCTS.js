export const PS5_PRODUCTS = ({ products, caption }) => {
  console.log(products, caption);
  return (
    <ul>
      {caption}
      {products.map(({ name }) => {
        return <li>{name}</li>;
      })}
    </ul>
  );
};
