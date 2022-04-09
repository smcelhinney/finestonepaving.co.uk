import Head from 'next/head'
import React, { useEffect } from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import About from '../components/about'
import Contact from '../components/contact'
import Gallery from '../components/GalleryView'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import landingPageData from '../data/data.json'

function HomePage() {
  //console.log(landingPageData)
  useEffect(() => {
    // @ts-ignore
    window.fbAsyncInit = function () {
      // @ts-ignore
      FB.init({
        xfbml: true,
        version: 'v9.0',
      })
    }

    // Facebook
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])

  return (
    <SimpleReactLightbox>
      <div>
        <Head>
          <title>
            Fine Stone Paving Ltd | Cheshire-based paving and driveway company
          </title>
          <meta name="description" content="Fine Stone Paving" />
        </Head>

        <div id="fb-root"></div>
        <Navigation />
        <Header data={landingPageData.Header} />
        {/* <Features data={landingPageData.Features} /> */}
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Testimonials data={landingPageData.Testimonials} />
        {/* <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
        {/* @ts-ignore  */}
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="106923447801086"
        ></div>
      </div>
    </SimpleReactLightbox>
  )
}

export default HomePage
