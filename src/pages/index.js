import Head from 'next/head'
import styles from '../scss/Home.module.scss'
import { useContext } from 'react'
import {GlobalContext} from "../global/context/useContext.js"

export default function Home() {

  const { nome } = useContext(GlobalContext)
  const { setNome } = useContext(GlobalContext)

  return (
<div>

<Head>
    <title> Iniciando Projeto </title>
    <meta name="Iniciando Projeto" content="Iniciando Projeto" />
    {/* <link rel="icon" href="/favicon.ico" /> */}
  </Head>
  <h1 className={styles.title}> Iniciando Projeto </h1>
  <h1 className={styles.title}> O que tem dentro do context ? {nome}</h1>
</div>
  )
}
