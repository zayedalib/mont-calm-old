import Head from 'next/head'
import siteMetadata from '../../data/siteMetadata'
import navigation from '../../data/navigation';
import useNavigation from '../hooks/useNavigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome';

const Home = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className="h-screen overflow-x-hidden">
      <Head>
        <title>{siteMetadata.title}</title>
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
      <Welcome />
      <Footer />
    </div>
  )
}

export default Home