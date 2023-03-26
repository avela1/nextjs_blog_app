import React from "react";

const SearchInputCard = () => {
  return (
    // <form className="w-full">
    //   <label for="simple-search" className="sr-only">
    //     Search
    //   </label>
    //   <div className="ml-20 mr-20 relative">
    //     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-gray-500 dark:text-gray-400"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </div>
    //     <input
    //       type="text"
    //       id="simple-search"
    //       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="Search"
    //       required
    //     />
    //   </div>
    // </form>
    <div className="max-w-md mx-auto w-full">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden g-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div className="grid place-items-center h-full w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  w-full h-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  outline-none"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
};

export default SearchInputCard;
