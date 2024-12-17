import { DraftProduct, Product } from "../types";

const BASE_URL = 'http://localhost:8080';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const { _embedded } = await response.json();
  const { products } = _embedded;

  return products;
};

export const createProduct = async (product: DraftProduct): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  return response.json();
};

export const updateProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to update product');
  }

  return response.json();
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    // const result = await response.json();
    // console.log('Product deleted:', result);

  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
