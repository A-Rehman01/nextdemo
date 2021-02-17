import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Person1 from './Person1';
export default function Home() {
  return (
    <div className={styles.container}>
      Main Branch
      <div>Person1</div>
      <Person1 />
    </div>
  );
}
