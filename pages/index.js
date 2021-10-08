import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProfilePage from "./profile"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React + Atom + Next.js</title>
        <meta name="description" content="React / Atom / Next.js sample application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProfilePage />
      </main>

      <footer className={styles.footer}>
        Made with ❤ at Discover
      </footer>
    </div>
  )
}