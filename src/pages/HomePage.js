import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../fetchData";

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProductData(productData);
    });
  }, []);

  return (
    <Layout>
      <Box sx={{ height: "500px" }}>
        <ProductList products={productData} />
      </Box>
    </Layout>
  );
};

export default HomePage;
