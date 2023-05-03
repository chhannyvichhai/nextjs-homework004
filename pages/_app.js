// import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></Script>
      <Component {...pageProps}/>
    </>
  )
}
