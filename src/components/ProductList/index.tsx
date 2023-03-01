import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import SearchInfo from './SearchInfo';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductList = () => {
  const { productsFilterList } = useContext(ProductsContext);

  return (
    <>
      <SearchInfo />
      <StyledProductList>
        {productsFilterList.map((product) => (
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
    </>
  );
};

export default ProductList;
