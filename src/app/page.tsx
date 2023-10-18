import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/product">
        <p>Product</p>
      </Link>
      <Link href="/order">
        <p>Order</p>
      </Link>
      <Link href="/cart">
        <p>Cart</p>
      </Link>
    </div>
  );
};

export default HomePage;
