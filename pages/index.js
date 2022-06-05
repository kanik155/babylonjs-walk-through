import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ModelViewer from "./ModelViewer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>babylon.js walk-through demo</title>
        <meta name="description" content="babylon.js walk-through demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModelViewer></ModelViewer>
    </div>
  )
}
