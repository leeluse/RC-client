import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { MainItems } from './items/MainItems';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태 추가
  
  
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // 검색 결과를 설정하기 위해 검색어 상태를 검색 결과 상태로 설정
    setSearchResults(searchQuery);
  };

  useEffect(() => {
    // 검색어 상태 변경 시 검색 결과 상태 초기화
    setSearchResults([]);
  }, [searchQuery]);


  return (
  <>
    <>
    <Nav
        searchQuery={searchQuery}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className='h-screen overflow-auto scrollbar-hide py-36'>
       {/* MainItems 컴포넌트에 검색어와 검색 결과를 전달 */}
       <MainItems searchQuery={searchQuery} setSearchResults={setSearchResults} results={searchResults}/>
      </div>
      </>
    </>
  );
};

export default MainPage;
