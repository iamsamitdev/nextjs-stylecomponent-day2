import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle')
  },[])

  return <Component {...pageProps} />
}

export default MyApp
