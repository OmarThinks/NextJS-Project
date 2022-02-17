
import React from "react";




  class Page extends React.Component {
    static async getInitialProps(ctx) {
      const page = ctx.query.page || "1";
      const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
      const products = await res.json();
      return { page: page, products:products }
    }
  
    render() {
      const products = this.props.products;
      return (
        <ul>
        {products.results.map((product) => (
          <li key={product.id}>
              
              <a href={`/products/${product.id}`}>

              {product.name}
              </a>
              </li>
        ))}
      </ul>
        )
    }
  }





  
export default Page