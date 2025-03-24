import React from 'react'

const Pagination = ({ totalData, dataPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <div className='flex justify-center items-center mt-10'>
                {
                    pages?.map((page, index) => (
                        <button key={index} onClick={() => setCurrentPage(page)} className={`${page === currentPage ? 'bg-[#FFFFFF] text-black' : 'bg-black text-[#FFFFFF]'} ml-2 text-lg py-2 px-4`}>{page}</button>
                    ))
                }
            </div>
        </>
    )
}

export default Pagination