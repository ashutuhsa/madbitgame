/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>madbitgame</title>
        <meta name="description" content="Bit game" />
      </Head>

      <main className={styles.main}>
        <h1>somethign here</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.mad4n7.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            mad4n7
          </span>
        </a>
      </footer>
    </div>
  )
}
