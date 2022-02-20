import React from "react";



/*
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
*/

/*

  export async function getServerSideProps(ctx) {
    // Call an external API endpoint to get posts
    const page = ctx.query.page || "1";
    const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
    const products = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products:products.results,
      },
    }
  }

*/




  
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    //const page = ctx.query.page || "1";
    const page = "1";
    const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
    const products = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products:products.results,
      },
      revalidate: 10, // In seconds
    }
  }






  function ProductsPage({ products }) {
    return (
      <ul>
      {products.map((product) => (
        <li key={product.id}>
            
            <a href={`/products/${product.id}`}>

            {product.name}
            </a>
            </li>
      ))}
    </ul>
    )
  }

  
export default ProductsPage