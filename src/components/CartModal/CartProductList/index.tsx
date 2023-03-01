import { useContext } from 'react';
import { ConfirmToast } from 'react-confirm-toast';

import { StyledCartProductList } from './style';
import CartProductCard from './CartProductCard';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ProductsContext } from '../../../contexts/ProductsContext';

const CartProductList = () => {
  const { productsCartList, cleanCart } = useContext(ProductsContext);

  const totalCart = productsCartList.reduce(
    (valorAnterior, valorAtual) => valorAtual.price + valorAnterior,
    0
  );

  return (
    <StyledCartProductList>
      <ul>
        {productsCartList.map((product) => (
          <CartProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {totalCart.toFixed(2)}
        </StyledParagraph>
      </div>
      <ConfirmToast
        childrenClassName='confirmToast'
        customFunction={cleanCart}
        asModal
        customCancel='Cancelar'
        customConfirm='Confirmar'
        message='Tem certeza que quer limpar o carrinho?'
        showCloseIcon={false}
        // margin={'15px'}
        theme='dark'
      >
        <StyledButton $buttonSize='default' $buttonStyle='gray'>
          Remover todos
        </StyledButton>
      </ConfirmToast>
    </StyledCartProductList>
  );
};

export default CartProductList;
