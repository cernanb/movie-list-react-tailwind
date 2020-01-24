import React from 'react'

const Pagination = ({ pages, setPage, page, totalPages }) => {
  const pageStart = page % 10 === 0 ? Math.floor((page - 1) / 10) * 10 : Math.floor(page / 10) * 10
  const pageButtonsToRender = Array.from(Array(totalPages).keys())
    .slice(0, 10)
    .map(x => x + pageStart + 1)
    .filter(y => y <= totalPages)
  return (
    <div className="inline-block">
      <ul className="flex flex-wrap list-reset border border-grey-light rounded font-sans">
        <li>
          <button
            disabled={page === 1}
            className="block hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer "
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        </li>

        {pageButtonsToRender.map(pageNum => (
          <li key={pageNum}>
            <span
              className={`block ${
                page === pageNum ? 'bg-blue-500 text-white' : ''
              } hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </span>
          </li>
        ))}

        <li>
          <button
            disabled={page === totalPages}
            className=" hover:text-white hover:bg-blue-500 text-blue px-3 py-2 cursor-pointer"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
