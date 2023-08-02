import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div className="py-4">
            <nav aria-label="Page navigation" className="flex">
                <ul className="inline-flex mx-auto">
                    <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100" onClick={() => prevPage()}>Prev</button></li>
                    {pageNumbers.map((pageNumber) => (
                        <li key = {pageNumber}>
                            <button
                                className={`h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border
                                    ${
                                        currentPage === pageNumber ? "!bg-[#0000ff] text-white transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100" : "border-gray-300 hover:bg-gray-100"
                                    }`
                                }
                                    onClick={() => setCurrentPage(pageNumber)}
                                >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                    <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100" onClick={() => nextPage()}>Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination