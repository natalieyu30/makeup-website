import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetTopProducts = () => {
  const [products, setProducts] = useState([]);

  const PRODUCT_TAGS = [
    "canadian",
    "certclean",
    "chemical free",
    "dairy free",
    "ewg verified",
    "ecocert",
    "fair trade",
    "gluten free",
    "hypoallergenic",
    "natural",
    "no talc",
    "non-gmo",
    "organic",
    "peanut free product",
    "sugar free",
    "usda organic",
    "vegan",
    "alcohol free",
    "cruelty free",
    "oil free",
    "purpicks",
    "silicone free",
    "water free",
  ];
  const PRODUCT_COUNT = 8;

  const getRandomProductTags = () => {
    const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length);
    return PRODUCT_TAGS[randomNumber];
  };

  const getTopProducts = () => {
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: getRandomProductTags(),
        },
      })
      .then((response) => {
        const items = response.data;
        items.length =
          items.length > PRODUCT_COUNT ? PRODUCT_COUNT : items.length;
        setProducts(items);
      });
  };

  useEffect(() => {
    getTopProducts();
  }, []);

  return { products };
};

export default useGetTopProducts;
