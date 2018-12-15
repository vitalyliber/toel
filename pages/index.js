import Head from 'next/head'
import GeneralScreen from '../components/GeneralScreen.js'

export default () => (
  <div>
    <Head>
      <title>Toel, умная разработка приложений c использованием Ruby on Rails, React Native и DevOps</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      {/*thanks to the icon generator https://realfavicongenerator.net*/}
      <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../static/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="../static/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <GeneralScreen/>

  </div>
)
