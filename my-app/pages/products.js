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





function ProductsPage({products}) {
    return (
        <ul>
        {products.results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
        );
  }





  
export default ProductsPage