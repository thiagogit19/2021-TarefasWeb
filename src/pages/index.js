import Head from 'next/head'

import AppNavBar from '../Components/AppNavBar'
import AppCardBullets from '../Components/AppCardBullets'

export default function Home() {

  let title = "Meu Primeiro Web App"

  const bullets_today = [
    {type: 'event', title: "Momento síncrono"}
    {type: 'task', title: "01"}
  ];

  const bullets_tomorrow = [
    {type: 'task', title: '...'}
    {type: 'task', title: '...'}
    {type: 'task', title: '...'}
    {type: 'task', title: '...'}
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppNavBar title={title}></AppNavBar>
        <AppCardBullets date="{21/09/2021}" bullets={bullets_today}></AppCardBullets>
        <AppCardBullets date="{28/09/2021}" bullets={bullets_tomorrow}></AppCardBullets>
      </main>
    </div>
  )
}
