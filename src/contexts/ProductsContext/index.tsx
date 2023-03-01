import { toast } from 'react-toastify';

import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct, IProductsContext, IProductsProviderProps } from './types';
import { api } from '../../services/api';

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [productsCartList, setProductsCartList] = useState<IProduct[]>([]);
  const [productsFilterList, setProductsFilterList] = useState<IProduct[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const filter = productsList.filter(
      (element) =>
        element.name.toLowerCase().includes(searchText.toLowerCase()) ||
        element.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductsFilterList(filter);
  }, [searchText]);

  useEffect(() => {
    const authToken = window.localStorage.getItem('@TOKEN');
    if (authToken) {
      const getProductsList = async (): Promise<void> => {
        try {
          const response = await api.get('/products', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          setProductsList(response.data);
          setProductsFilterList(response.data);
        } catch (error) {
          window.localStorage.clear();
          setProductsList([]);
          toast.error(
            'Não encontramos uma sessão ativa, por favor faça o login para acessar'
          );
          navigate('/');
        }
      };
      getProductsList();
    } else {
      window.localStorage.clear();
      setProductsList([]);
      toast.error(
        'Não encontramos uma sessão ativa, por favor faça o login para acessar'
      );
      navigate('/');
    }
  }, []);

  const addToCart = (productID: number): void => {
    const findProduct = productsList.find(
      (product) => product.id === productID
    );

    if (findProduct && productsCartList.includes(findProduct)) {
      toast.warning('Este produto já está no carrinho');
    } else {
      toast.success('Produto adicionado ao carrinho!');
      const oldCartList = [...productsCartList];
      if (findProduct) {
        oldCartList.push(findProduct);
      }
      setProductsCartList(oldCartList);
    }
  };

  const removeFromCart = (productID: number): void => {
    const removeOldToUpdateUser = productsCartList.filter(
      (product) => product.id !== productID
    );
    setProductsCartList(removeOldToUpdateUser);
    toast.success('Produto removido do carrinho!');
  };

  const cleanCart = (): void => {
    setProductsCartList([]);
    toast.success('Todos produtos foram removidos do carrinho!');
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        productsCartList,
        addToCart,
        removeFromCart,
        cleanCart,
        productsFilterList,
        setProductsFilterList,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
