import navigation from '../../data/navigation';
import useNavigation from '../hooks/useNavigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer'
import { Accordion } from '../components/Accordion';
import FAQ from '../../data/FAQ';
import SectionContainer from '../components/lib/SectionContainer';
import Head from 'next/head';
import siteMetadata from '../../data/siteMetadata';
import { Parallax } from "react-parallax";

const Faq = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

const image = "https://th.bing.com/th/id/R.d93ea8a317635712fdea471a14b482bb?rik=vUUx%2bRFqoo9iXw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f8%2f0%2f842540-free-kashmir-wallpaper-1920x1080-samsung.jpg&ehk=I81JjdcoRi9l1fP44t5TD%2bngqlHQvNIOAUcsvGxSiIY%3d&risl=&pid=ImgRaw&r=0&adlt=strict"

  return (
    <div>
      <Head>
        <title>{siteMetadata.title} | FAQ</title>
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
      navigationData={navigation}
      currentRoute={currentRoute}
      setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
      navigationData={navigation}
      currentRoute={currentRoute}
      setCurrentRoute={setCurrentRoute}
      />
      <SectionContainer>
        <Parallax className="w-full h-[280px] rounded-lg opacity-70 " bgImage={"/test.jpg"} strength={500}>
        <div className="font-extrabold text-green-700 text-8xl my-24 mx-8">
        FAQ
      </div>
        </Parallax>
        {FAQ.map((item) => (
        <Accordion
        key={item.title}
        title={item.title}
        content={item.content}
        />
        ))}
        </SectionContainer>
      <Footer />
    </div>
  )
}

export default Faq
