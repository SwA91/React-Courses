import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}
const itemsInCart: ItemInCart[] = [
  {
    productName: " nintendo",
    quantity: 1,
  },
  {
    productName: " playstation 4",
    quantity: 2,
  },
  {
    productName: " xbox 260",
    quantity: 3,
  },
];
export function FirstStepsApp() {
  return (
    <>
      <h1>carrito compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter
          key={productName}
          name={productName}
          quantity={quantity}
        ></ItemCounter>
      ))}
      {/* <ItemCounter name="nintento"></ItemCounter>
      <ItemCounter name="ps5" quantity={3}></ItemCounter>
      <ItemCounter name="xbox" quantity={2}></ItemCounter> */}
    </>
  );
}
