import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import styles from '../styles/Home.module.css'

export default function Home() {
  const navLinks = ['Events', 'Forum', 'Articles', 'Podcasts', 'Jobs'];

  return (
    <div className=''>
    <NavBar navLinks={navLinks} />
    <Banner />
    </div>
  )
}
