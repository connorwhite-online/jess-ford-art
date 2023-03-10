import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// Component Imports
import Header from './header';
import Content from './content';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jess Ford</title>
        <meta name="description" content="Jess Ford Healing Arts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <Header/>
        <Content />
      </main>
    </>
  )
}
