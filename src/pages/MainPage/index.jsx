import React from 'react'
import Nav from '../../components/Nav'
import Items from '../../components/Items'
import Footer from '../../components/Footer'

const MainPage = () => {
  return (
      <>
      <div className='w-full h-screen flex flex-col items-center'>
        <Nav />
        <div className="mt-40 min-w-full px-20 lg:px-80 overflow-y-auto">
          <Items />
        <Footer />
        </div>
      </div>
      </>
  )
}

export default MainPage
