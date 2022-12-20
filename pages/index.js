import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner';
import Headers from '../Components/Headers';
import NavBar from '../Components/NavBar';
import Partners from '../Components/Partners';
import MagicBox from '../Components/MagicBox';
import blogImg from '../public/images/pexels-dayvison-de-oliveira-silva-5696291.jpg'

export default function Home() {
  const navLinks = ['Events', 'Forum', 'Articles', 'Podcasts', 'Jobs'];

  return (
    <div >
    <NavBar navLinks={navLinks} />
    <Banner />
    <Partners />
    <div className='md:px-12 px-8 flex flex-col gap-4 items-start'>
    <Headers heading="Discover popular articles" paragraph="These articles review the latest news about the Framework, but also feedback on our business. Discover the most popular articles shared by members of the community."/>
    <div className='grid grid-cols-3 gap-2 bg-red-600 w-full'>
      <MagicBox coverImage={blogImg} heading="Introducing flutter in focus"/>
      <MagicBox coverImage={blogImg} heading="Introducing flutter in focus"/>
      <MagicBox coverImage={blogImg} heading="Introducing flutter in focus"/>
    </div>
    <button className='rounded text-white bg-green-800 py-2 px-5 cursor-pointer'>See all articles</button>
    </div>
    <div className='md:px-12 px-8 flex flex-col gap-4 items-start'>
      <Headers heading="Community events" paragraph="Find out about all the virtual and physical events organized by the different communities in each city. Attend events hosted by the global Flutter community and continue to learn more about Flutter."/>
    </div>
    </div>
  )
}
