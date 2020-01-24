import React from 'react'

const ListTypeNavigation = ({ setListType, listType, setPage }) => {
  return (
    <div className="my-8">
      <div className="inline-block">
        <ul className="flex list-reset border border-grey-light rounded font-sans">
          <li>
            <button
              className={`block hover:text-white ${listType === 'popular' &&
                'bg-blue-500 text-white'} hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
              onClick={() => {
                setListType('popular')
                setPage(1)
              }}
            >
              Popular
            </button>
          </li>
          <li>
            <button
              className={`block hover:text-white ${listType === 'upcoming' &&
                'bg-blue-500 text-white'} hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
              onClick={() => {
                setListType('upcoming')
                setPage(1)
              }}
            >
              Upcoming
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListTypeNavigation
