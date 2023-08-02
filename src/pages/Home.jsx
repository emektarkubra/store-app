import { useContext } from "react";
import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { SiteContext } from "../context/SiteContext";

export default function Home() {
  const { getData } = useContext(SiteContext);
  getData("products");

  return (
    <>
      <ProductList />
    </>
  );
}
