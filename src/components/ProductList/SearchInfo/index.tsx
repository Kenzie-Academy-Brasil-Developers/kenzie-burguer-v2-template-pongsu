import { useContext } from 'react';
import { StyledSearchInfo } from './style';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { StyledButton } from '../../../styles/button';

const SearchInfo = () => {
  const { searchText, setSearchText, setProductsFilterList, productsList } =
    useContext(ProductsContext);

  return searchText !== '' ? (
    <StyledSearchInfo>
      <div>
        <span className='resultTitle'>Resultados para:</span>
        <p className='searchText'>&quot;{searchText}&quot;</p>
      </div>
      <StyledButton
        type='button'
        onClick={() => {
          setSearchText('');
          setProductsFilterList(productsList);
        }}
        $buttonSize='medium'
        $buttonStyle='green'
      >
        Limpar busca
      </StyledButton>
    </StyledSearchInfo>
  ) : null;
};

export default SearchInfo;
