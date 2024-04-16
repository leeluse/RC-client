import React from 'react'
import Nav from '../../components/Nav'
import Items from '../../components/Items'
import Footer from '../../components/Footer'

const MainPage = () => {
  return (
      <>
      <div className='w-full min-h-screen flex flex-col items-center'>
        <Nav />
        <div className="py-40 h-full w-full flex flex-row justify-center">
          {/* flex grow로 요소의 크기 만큼 높이 확장 */}
          <div className='sm:w-2/3 md:w-1/2 lg:w-1/2 '>
          <Items />
          </div>
        </div>
        <div className='h-full w-full'>        
        <Footer />
        </div>
      </div>
      </>
  )
}

export default MainPage
