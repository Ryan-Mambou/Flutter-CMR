import Head from 'next/head'
import Banner from '../Components/Banner';
import Headers from '../Components/Headers';
import NavBar from '../Components/NavBar';
import Partners from '../Components/Partners';
import MagicBox from '../Components/MagicBox';
import blogImg from '../public/images/pexels-dayvison-de-oliveira-silva-5696291.jpg'
import blogImg2 from '../public/images/pexels-diva-plavalaguna-6150527.jpg'
import blogImg3 from '../public/images/pexels-henri-mathieusaintlaurent-8348624.jpg'
import blogImg4 from '../public/images/pexels-matheus-bertelli-3321796.jpg'
import communityImg1 from '../public/images/21.png'
import communityImg2 from '../public/images/22.png'
import communityImg3 from '../public/images/23.png'
import communityImg4 from '../public/images/24.png'
import OtherBox from '../Components/OtherBox';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import twitterIcon from '../public/images/twitter.svg'
import gitHubIcon from '../public/images/github.svg'
import telegramIcon from '../public/images/telegram.svg'

export default function Home() {
  const navLinks = ['Events', 'Forum', 'Articles', 'Podcasts', 'Jobs'];

  return (
    <div >
    <NavBar navLinks={navLinks} />
    <Banner />
    <Partners />

    <div className='md:px-12 px-4 flex flex-col gap-4 items-start justify-center'>
    <Headers heading="Discover popular articles" paragraph="These articles review the latest news about the Framework, but also feedback on our business. Discover the most popular articles shared by members of the community."/>
    <div className='grid grid-col-1 lg:grid-cols-3 lg:grid-rows-2 gap-3 w-full'>
      <div className="md:row-span-2"><MagicBox coverImage={blogImg} heading="Introducing flutter in focus"/></div>
      <div className="md:row-span-1"><MagicBox coverImage={blogImg2} heading="Flutter 3 is available 🔥🔥"/></div>
      <div className="md:row-span-2"><MagicBox coverImage={blogImg3} heading="Flutter Apprentice Giveaway"/></div>
      <div className="md:row-span-1"><MagicBox coverImage={blogImg4} heading="How to Create Stateless Widgets - Flutter Widgets 101 Ep. 1"/></div>
    </div>
    <button className='rounded text-white bg-green-800 hover:opacity-[0.6] py-2 px-5 cursor-pointer'>See all articles</button>
    </div>

    <div className='md:px-12 px-4 flex flex-col gap-3 items-start'>
      <Headers heading="Community events" paragraph="Find out about all the virtual and physical events organized by the different communities in each city. Attend events hosted by the global Flutter community and continue to learn more about Flutter."/>
      <div className='grid md:grid-cols-10 grid-rows-2 gap-8 md:gap-4'>
        <div className="md:col-span-6"><OtherBox coverImage={communityImg1} heading="Flutter at Google I/O 2022" paragraph="Dig into Flutter's announcements from I/O, including Flutter 3."/></div>
        <div className="md:col-span-4"><OtherBox coverImage={communityImg2} heading="FlutterFestival Cameroon" paragraph="Today is the big day of our #FlutterFestival Cameroon. we expect you massively between 13h and 17h at @ActivSpaces Douala."/></div>
        <div className="md:col-span-4"><OtherBox coverImage={communityImg4} heading="Flutter Update: App Monetization" paragraph="Watch Flutter Update to get the latest news about updates to our monetization features."/></div>
        <div className="md:col-span-6"><OtherBox coverImage={communityImg3} heading="Flutter Interact 2019" paragraph="Watch Keynotes and Sessions from Flutter Interact in 2019 and check out the photo gallery to see who was there!"/></div>
        </div>
        <button className='rounded-lg transition-all duration-150 ease-linear bg-green-200 hover:bg-white border-2 text-green-400 border-green-400 px-6 py-2'>See all events</button>
    </div>
    <Newsletter />
    <div className="md:px-8 px-4">
      <Footer/>
      <hr className='boder-2 my-4'/>
      <div className='mb-3 flex md:flex-row flex-col gap-3 justify-between items-start'>
        <span>© 2019 - 2022 Flutter Cameroon. All rigths reserved - Design by <span className='text-green-700'>MBAGNA Johan</span></span>
        <div>
          <ul className='flex flex-row gap-2'>
            <li><Link href=""><Image src={twitterIcon} alt="icon"/></Link></li>
            <li><Link href=""><Image src={gitHubIcon} alt="icon"/></Link></li>
            <li><Link href=""><Image src={telegramIcon} alt="icon"/></Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
