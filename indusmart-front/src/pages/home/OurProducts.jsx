import { useEffect, useState } from "react";
import { getAllProducts } from "../../apis/api"; // Import your API function here
import ProductCard from "../../components/ProductCard";

const OurProducts = () => {
  const [products, setProducts] = useState([]); //array
  const [productsToRender, setProductsToRender] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        //response : res.data.products (all products)
        setProducts(res.data.data);
        setProductsToRender(res.data.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(productsToRender);
  }, [productsToRender]);
  return (
    <div className='row'>
      {productsToRender.map((product) => (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <ProductCard productInformation={product} />
        </div>
      ))}
    </div>
  );
};
export default OurProducts;
