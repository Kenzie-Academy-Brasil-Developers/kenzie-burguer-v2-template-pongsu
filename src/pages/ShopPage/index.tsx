import { useState } from 'react';

import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';

const ShopPage = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <StyledShopPage>
      {showCart && <CartModal setShowCart={setShowCart} />}
      <Header setShowCart={setShowCart} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
