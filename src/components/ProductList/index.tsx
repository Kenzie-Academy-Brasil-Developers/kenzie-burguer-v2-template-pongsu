import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductList = () => {
  const { productsList } = useContext(ProductsContext);

  return (
    <StyledProductList>
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
