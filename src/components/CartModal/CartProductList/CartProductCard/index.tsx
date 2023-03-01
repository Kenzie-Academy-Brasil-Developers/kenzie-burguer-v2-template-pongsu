import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProduct } from '../../../../contexts/ProductsContext/types';
import { ProductsContext } from '../../../../contexts/ProductsContext';
const CartProductCard = ({
  id,
  name,
  img,
}: Omit<IProduct, 'category' | 'price'>) => {
  const { removeFromCart } = useContext(ProductsContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button
          onClick={() => removeFromCart(id)}
          type='button'
          aria-label='Remover'
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
