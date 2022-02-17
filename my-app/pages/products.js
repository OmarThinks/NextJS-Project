export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://cantiin.com/api/products');
    const products = await res.json();
    //console.log("I am sending the request");
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
    }
  }




/*
  // This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://cantiin.com/api/products')
    const products = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = products.results.map((product) => ({
      params: { id: product.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
*/









function ProductsPage({products}) {
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
        );
  }





  
export default ProductsPage