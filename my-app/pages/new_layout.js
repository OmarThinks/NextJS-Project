import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'



export default function NewLayout() {
  return (
    <div>

        Gangsta party
    </div>

  )
}



NewLayout.getLayout = function getLayout(page) {
    return (
      <div>
      Gangsta party

        {page}


        Gangsta party

    </div>
      
    )
  }
