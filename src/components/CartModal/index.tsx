import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { ProductsContext } from '../../contexts/ProductsContext';

const CartModal = ({
  setShowCart,
}: {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { productsCartList } = useContext(ProductsContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setShowCart(false);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {productsCartList.length > 0 ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>
                Adicione itens
              </StyledParagraph>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
