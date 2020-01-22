import React from 'react'

const Pagination = ({ pages, setPage, page }) => {
  return (
    <ul class="flex list-reset border border-grey-light rounded w-auto font-sans">
      {page !== 1 && (
        <li>
          <span
            class="block hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </span>
        </li>
      )}

      {pages.map(pageNum => (
        <li>
          <span
            className={`block ${
              page === pageNum + 1 ? 'bg-blue-500 text-white' : ''
            } hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
            onClick={() => setPage(pageNum + 1)}
          >
            {pageNum + 1}
          </span>
        </li>
      ))}
      {page !== pages.length && (
        <li>
          <span
            class="block hover:text-white hover:bg-blue-500 text-blue px-3 py-2 cursor-pointer"
            onClick={() => setPage(page + 1)}
          >
            Next
          </span>
        </li>
      )}
    </ul>
  )
}

export default Pagination
