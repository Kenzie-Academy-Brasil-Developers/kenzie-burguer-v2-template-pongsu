import { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ProductsContext } from '../../../contexts/ProductsContext';

const SearchForm = () => {
  const { setProductsFilterList, productsList, searchText, setSearchText } =
    useContext(ProductsContext);

  function showProducts(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const filter = productsList.filter(
      (element) =>
        element.name.toLowerCase().includes(searchText.toLowerCase()) ||
        element.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductsFilterList(filter);
  }

  return (
    <StyledSearchForm onSubmit={(e) => showProducts(e)}>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type='text'
        placeholder='Digitar pesquisa'
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
