import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetRecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const getRecommendedProducts = ({ product }) => {
    let key = product.product_type ? "product_type" : "brand";
    let value = product.product_type ? product.product_type : product.brand;
    // console.log(product);
    // console.log(key, value);

    axios
      .get(`${BASE_URL}.json`, {
        params: {
          [key]: value,
        },
      })
      .then((response) => {
        const fetchedProducts = response.data;
        fetchedProducts.length =
          fetchedProducts.length > 4 ? 4 : fetchedProducts.length;
        setRecommendedProducts(fetchedProducts);
      })
      .catch((err) => console.log(err));
  };

  return { recommendedProducts, getRecommendedProducts };
};

export default useGetRecommendedProducts;
