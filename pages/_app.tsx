import React from 'react'
import '../public/css/bootstrap.css'
import '../public/fonts/font-awesome/css/font-awesome.css'
import '../public/css/style.css'
import '../public/css/nivo-lightbox/nivo-lightbox.css'
import '../public/css/nivo-lightbox/default.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
