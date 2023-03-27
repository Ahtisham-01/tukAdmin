import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import LoginForm from "../components/login"
export default function Home() {
  return (
    <>
      <Head>
        <title>Tuk Admin Panel</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width "
        />
        <meta
          property="og:title"
          content="Tuk Admin Panel"
        />

      </Head>
      <div className="bg-white">
        <LoginForm />
      </div>
    </>
  )
}
