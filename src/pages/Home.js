import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
       <Row title='Popular' fetchURL={requests.requestPopular} color='red'/>
       <Row title='Upcoming' fetchURL={requests.requestUpcoming} color='blue'/>
       <Row title='TopRated' fetchURL={requests.requestTopRated} color='yellow'/>
       <Row title='NowPlaying' fetchURL={requests.requestNowPlaying} color='pink'/>
    </>
  )
}

export default Home
