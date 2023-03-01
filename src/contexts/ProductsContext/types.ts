import { ReactNode } from 'react';

export interface IProductsProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsContext {
  productsList: IProduct[] | [];
  productsCartList: IProduct[];
  productsFilterList: IProduct[] | [];
  setProductsFilterList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (productID: number) => void;
  removeFromCart: (productID: number) => void;
  cleanCart: () => void;
}
