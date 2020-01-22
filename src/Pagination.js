import React from 'react'

const Pagination = ({ pages, setPage, page }) => {
  return (
    <ul class="flex list-reset border border-grey-light rounded w-auto font-sans">
      <li>
        <a class="block hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2" href="/sf">
          Previous
        </a>
      </li>
      {pages.map(pageNum => (
        <li>
          <a
            className={`block ${
              page === pageNum + 1 ? 'bg-blue-500 text-white' : ''
            } hover:text-white hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2`}
            href={`#${pageNum + 1}`}
            onClick={() => setPage(pageNum + 1)}
          >
            {pageNum + 1}
          </a>
        </li>
      ))}

      <li>
        <a class="block hover:text-white hover:bg-blue-500 text-blue px-3 py-2" href="/dff">
          Next
        </a>
      </li>
    </ul>
  )
}

export default Pagination
