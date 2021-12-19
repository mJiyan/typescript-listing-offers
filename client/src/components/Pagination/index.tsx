import React from 'react';

type Props = {
  totalPages: number;
  changePage: (pageNumber: number) => void;
  page: number;
};

const Pagination: React.FC<Props> = ({ totalPages, changePage, page }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex flex-wrap justify-center  xl:h-10  xl:mb-20  ">
      <ul className="inline-flex">
        <li>
          <button
            disabled={page === 1 && true}
            className="h-10 px-5 text-orange-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-orange-100"
            onClick={() => changePage(page - 1)}
          >
            Prev
          </button>
        </li>
        {pages.map((num) => (
          <li key={num}>
            <button
              key={num}
              onClick={() => changePage(num)}
              className={`h-10 px-2 duration-150  focus:shadow-outline hover:bg-orange-100  rounded-full ${
                num === page ? 'bg-orange-600 text-white-100' : 'text-orange-600'
              }`}
            >
              {num}
            </button>
          </li>
        ))}
        <li>
          <button
            className="h-10 px-5 text-orange-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-orange-100"
            onClick={() => changePage(page + 1)}
            disabled={page === pages.length && true}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
