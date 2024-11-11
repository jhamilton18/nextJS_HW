import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../pages/components/Counter';
import GitHub from '../pages/components/GitHub';
import SearchBar from '../pages/components/Searchbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>

        Josh Hamilton Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Counter name={"Count by 1's"} mult={1} size={2}/>
        <Counter name={"Count by 2's"} mult={2} size={0.5}/>
        
        <hr
         style={{
           width: "80%",
           marginTop: "1em",
           }}
           />
        <GitHub/>
        <hr
         style={{
           width: "80%",
           marginTop: "1em",
           }}
           />
           
           <p>Check out my fake store! <a href="/store">CLICK HERE</a></p>


           

           

    
    </div>
  );
}
