import navigation from '../../data/navigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer';
import useNavigation from '../hooks/useNavigation';
import classNames from 'classnames';
import Snowfall from 'react-snowfall';
import Head from 'next/head';
import siteMetadata from '../../data/siteMetadata';
import SectionContainer from '../components/lib/SectionContainer';
import { ApiResponse, useApiGet } from '../hooks/useFetch';

const Discover = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

    const data: ApiResponse = useApiGet(
      "https://api.openweathermap.org/data/2.5/weather?lat=33.909917041326935&lon=73.39380057780413&appid=b1518d49cb6c5781e4f43ede0a5bf43c&units=metric"
    );
    
    if (!data.loading) console.log(data);

    const Weather = !data.data.weather[0].main

    // Gets the UTC 24 hour clock and adjusts to Pakistan's UTC + 5
    let pkTime: number = new Date().getUTCHours() + 5;
    if (pkTime > 24) {
      pkTime = pkTime - 24
    }

  return (
    <div>
      <Head>
        <title>{siteMetadata.title} | Discover</title>
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Sets nav routing, albeit slightly broken :( */}
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
      {/* This is where the fun begins (Anakin moment); conditional CSS */}
      <div
      className={classNames(
        "absolute h-screen w-screen bg-gradient-to-t",
        {
          "from-gray-700 via-gray-900 to-black": pkTime < 5 || pkTime > 21,
          "from-sky-400 to-blue-500": pkTime > 5 && pkTime < 21,
        }
        )}
        >{/*
          {(() => {
            if (Weather === "Snow") {
              return <Snowfall />;
            } else if (Weather === "Clear") {
              return "Clear";
            } else if (Weather === "Clouds") {
              return "Clouds";
            } else if (Weather === "Rain") {
              return "Rain";
            }
            })()} */}
          <SectionContainer>
            <div className="bg-white w-full h-screen">
            </div>
          </SectionContainer>
          <Footer />
        </div>
    </div>
  )
}

export default Discover