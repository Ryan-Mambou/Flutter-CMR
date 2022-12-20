import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner';
import Headers from '../Components/Headers';
import NavBar from '../Components/NavBar';
import Partners from '../Components/Partners';
import MagicBox from '../Components/MagicBox';
import blogImg from '../public/images/pexels-dayvison-de-oliveira-silva-5696291.jpg'
import blogImg2 from '../public/images/pexels-diva-plavalaguna-6150527.jpg'
import blogImg3 from '../public/images/pexels-henri-mathieusaintlaurent-8348624.jpg'
import blogImg4 from '../public/images/pexels-matheus-bertelli-3321796.jpg'

export default function Home() {
  const navLinks = ['Events', 'Forum', 'Articles', 'Podcasts', 'Jobs'];

  return (
    <div >
    <NavBar navLinks={navLinks} />
    <Banner />
    <Partners />
    <div className='md:px-12 px-8 flex flex-col gap-4 items-start'>
    <Headers heading="Discover popular articles" paragraph="These articles review the latest news about the Framework, but also feedback on our business. Discover the most popular articles shared by members of the community."/>
    <div className='grid grid-col-1 md:grid-cols-3 md:grid-rows-2 gap-3 w-full h-[26rem]'>
      <div className="md:row-span-2"><MagicBox coverImage={blogImg} heading="Introducing flutter in focus"/></div>
      <MagicBox coverImage={blogImg2} heading="Introducing flutter in focus"/>
      <div className="md:row-span-2"><MagicBox coverImage={blogImg3} heading="Introducing flutter in focus"/></div>
      <MagicBox coverImage={blogImg4} heading="Introducing flutter in focus"/>
    </div>
    <button className='rounded text-white bg-green-800 py-2 px-5 cursor-pointer'>See all articles</button>
    </div>
    <div className='md:px-12 px-8 flex flex-col gap-4 items-start'>
      <Headers heading="Community events" paragraph="Find out about all the virtual and physical events organized by the different communities in each city. Attend events hosted by the global Flutter community and continue to learn more about Flutter."/>
    </div>
    </div>
  )
}
