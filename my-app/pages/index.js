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
    </div>
  )
}


