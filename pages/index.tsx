import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BlazingTodoList from '../src/components/BlazingTodoList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Forget POC</title>
        <meta name="description" content="A proof of concept of React Forget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BlazingTodoList />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
