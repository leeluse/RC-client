import React, { useState } from 'react'

const Posts = () => {

  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* 백드롭 배경 */}
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h[-20] w-20 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                </div> */}
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-[25px] font-bold leading-6  text-gray-900" id="modal-title">
            게시물 등록하기
          </h3>
          <div className="mt-6">
            {/* 제목 작성 */}
                    <div>
            {/* 제목 */}
            <p className='text-md font-medium '>제목</p>
                <input 
                    className="w-full px-2 py-1 border border-slate-300 rounded-md mb-5" 
                    type="title" />

            {/* 금액 */}
            <p className='text-md font-medium '>금액</p>
              <input 
                  className="w-full px-2 py-1 border border-slate-300 rounded-md mb-5" 
                  type="title" />
            {/* 주/일/월 */}
            <p className='text-md font-medium '>주/일/월</p>
              <input 
                  className="w-full px-2 py-1 border border-slate-300 rounded-md mb-5" 
                  type="title" />
  
            {/* 내용 */}
            <p className='text-md font-medium '>내용</p>
              <input 
                  className="resize-none w-full px-2 py-1 border border-slate-300 rounded-md mb-5" 
                  type="text" />
                    </div>
                  </div>
                </div>




                <div className="flex items-center bg-slate-300 justify-center">
                  <div>hi</div>
                  <div>hi</div>
                  <div>hi</div>
                  <div>hi</div>
                </div>


                
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                등록하기
              </button>
              <button type="button"className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Posts

