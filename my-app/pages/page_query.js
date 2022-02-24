import React from "react";



export async function getServerSideProps(context) {
    const page = context.query.page || "1";
    // Here we got the "page" query parameter from Context
    // Default value is "1"
  
    const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
    const products = await res.json();
    return {
      props: {products: products.results}, // will be passed to the page component as props
    }
  }


const Page = (props) =>{
    const products = props.products;
    return (
      <ul>
        {products.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      );
}


export default Page