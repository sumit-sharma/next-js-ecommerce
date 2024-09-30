
export const getProducts = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const result =  await data.json();
//   console.log(result.products)
  return result.products;
};


export const addToCart = async(formData: FormData) => {
  
}
