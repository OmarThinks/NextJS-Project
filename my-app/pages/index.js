import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'



export default function Home() {
  return (
    <div>
        <p>Home</p>
        <a href='/products'>Products List</a>
        <div><Image src="/images/dummy_image.png" alt="me" width="64" height="64" /></div>
        <div><img src="/images/dummy_image.png" /></div>


        <form action="/send-data-here" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
    </div>
  )
}


