import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Person3 from './Person3';

export default function Home() {
  return (
    <div className={styles.container}>
      Main Branch
      <div>Person3</div>
      <div>Person1</div>
      <Person3 />
    </div>
  );
}
