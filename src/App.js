import "./styles.css";
import { PS2_START } from "./ps2_start";
import { ps2_style, items, imageLink, caption, products } from "./objects";
import { PS3_STATIONARY } from "./PS3_STATIONARY";
import { PS4_IMAGE } from "./PS4_IMAGE";
import { PS5_PRODUCTS } from "./PS5_PRODUCTS";

const PS6_PRODUCTS = ({ products, caption }) => {
  console.log(
    products.filter((sales, quantity) => {
      return sales >= quantity;
    })
  );
  return (
    <ul>
      {caption}
      {products
        .filter((sales, quantity) => {
          return sales >= quantity;
        })
        .map(({ name, sales, quantity }) => {
          return (
            <li>
              {name}:{sales}:{quantity}
            </li>
          );
        })}
    </ul>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>tanaypratap's box</h1>
      <h2>write your app here</h2>

      <PS2_START style_object={ps2_style} buttonname={"START2"} />
      <PS3_STATIONARY items={items} header={"Stationary Items"} />
      <PS4_IMAGE imageLink={imageLink} caption={caption} />
      <PS5_PRODUCTS products={products} caption={"Product Names"} />
      <PS6_PRODUCTS products={products} caption={"Filtered Products"} />
    </div>
  );
}
