import {BASE_URL} from '@/constants/apiType'
/*  function getAllCategories */
const getAllCategories = async()=>{
    const response = await fetch(BASE_URL + '/v1/categories')
    const categories = await response.json();
    return categories;
}
const fetchCategoriesByFilter = async (category , sort , page) => {
    try {
      const response = await fetch(BASE_URL+ `/v1/categories/search?filter=${category}&sort=${sort}&page=${page}&pageSize=20`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
}
export {getAllCategories,fetchCategoriesByFilter}