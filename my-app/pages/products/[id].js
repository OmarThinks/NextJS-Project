


// This function gets called at build time
export async function getStaticPaths({ params }) {
    // Call an external API endpoint to get posts
    
    console.log("Params",params);

    const res = await fetch('https://cantiin.com/api/products')
    const products = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = products.results.map((product) => ({
      params: { id: product.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }







// This also gets called at build time
export async function getStaticProps({ params }) {

    //console.log(params);

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://cantiin.com/api/products/${params.id}`)
    const product = await res.json()
  
    // Pass post data to the page via props
    return { props: { product } }
  }






function Product(props) {
    //console.log(props)
    return (<div>{JSON.stringify(props)}</div>);
  }
  
export default Product