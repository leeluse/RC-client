import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { MainItems } from './items/MainItems';

const MainPage = () => {
  const [search, setSearch] = useState("")
  const handleSearchSubmit = ( e, searchQuery ) => {
    e.preventDefault()
    setSearch(searchQuery)
  }
  return (
  <>
    <>
    <Nav
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className='h-screen overflow-auto scrollbar-hide py-36'>
       {/* MainItems 컴포넌트에 검색어와 검색 결과를 전달 */}
       <MainItems search={search} />
      </div>
      </>
    </>
  );
};

export default MainPage;
