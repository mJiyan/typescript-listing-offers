import React from 'react';

type Props = {
  totalPages: number;
  changePage: (pageNumber: number) => void;
  page: number;
};

// with the changePage function (which is passed from Offers) changing the current page for the list
const Pagination: React.FC<Props> = ({ totalPages, changePage, page }) => {
  // this function creating number array for the pagination component's button
  const convertTotalPagesToArray = (totalPage: number): Array<number> => {
    return [...Array(totalPage).keys()].map((num) => num + 1);
  };
  const pages = convertTotalPagesToArray(totalPages);

  return (
    <div className="flex flex-wrap justify-center  xl:h-10  xl:mb-20  ">
      <ul className="inline-flex" data-testid="list-page-buttons">
        <li>
          <button
            data-testid="prev-button"
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
              data-testid={`${num}-button`}
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
            data-testid="next-button"
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
