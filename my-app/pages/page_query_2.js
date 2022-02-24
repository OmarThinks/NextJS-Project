import {useState, useEffect} from "react";
import { useRouter } from 'next/router'

const Page = () =>{
    const [products, setProducts] = useState([]);
    const [page, setPage] =useState(useRouter().query.page || "1");
    // getting the page query parameter
    // Default value is equal to "1"

    useEffect(()=>{
      (async()=>{
        const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
        const products = await res.json();
        setProducts(products.results);
        // This code will be executed only once at begining of the loading of the page
        // It will not be executed again unless you cahnge the page
      })()
    },[page]);

    return (
      <ul>
        {products.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      );
}

export default Page