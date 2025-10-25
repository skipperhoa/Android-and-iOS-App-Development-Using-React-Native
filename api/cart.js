import {BASE_URL} from '@/constants/apiType'
// Add item to cart
/* 
params:{
id: product id,
quantity: number
}
http://localhost:800/api/v1/carts
*/
export const addItemToCartApi = async (data) => {
    const response = await fetch(`${BASE_URL}/v1/carts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.item),
    });
    return response.json();
};

// Remove item from cart
/* 
method: DELETE
params:{
id: product id
}
EXAMPLE: /v1/carts/123?token=123
*/
export const removeItemFromCartApi = async (data) => {
    const response = await fetch(`${BASE_URL}/v1/carts/${data.id}`, {
        method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        },
    });
    return response.json();
};

// Get cart items
/* 
http://laravel.test/api/v1/carts?token=eyJ0eX
*/
export const getCartItemsApi = async (data) => {
   
    const response = await fetch(`${BASE_URL}/v1/carts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        },
    });
    return response.json();
};

