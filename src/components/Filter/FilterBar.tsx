/* eslint-disable react-hooks/rules-of-hooks */
// import { useQueryClient } from "@tanstack/react-query";
import { useProductFilterContext } from "../../context/filter_context";
// import { QueryKeyEnum } from "../../modals/enum";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const FilterBar = (props: any) => {
  const {
    sort, updateSort, updateFilters, clearFilters, filters: { bestSellerOnly, onlyInStock, rating },
  } = useProductFilterContext();

  // const queryClient = new QueryClient();
  const updateFilter = (e: any) => {
    updateFilters(e)
    debugger
    // queryClient.removeQueries([QueryKeyEnum.getProductQuery])
    // queryClient.refetchQueries([QueryKeyEnum.getProductQuery])
  }

  return (
    <section className="filter">
      <div id="drawer-disable-body-scrolling" className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-14 transhtmlForm-none border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-900`} aria-labelledby="drawer-disable-body-scrolling-label" aria-modal="true" role="dialog">
        {/* <div className="border-b pb-3"></div> */}
        <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Filters</h5>
        <button onClick={() => props.setShow(false)} type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close Filters</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Sort by</p>
              <select name='sort' id='sort' value={sort} onChange={e => updateSort(e)}>
                <option value='price-lowest'>Price (lowest)</option>
                <option value='price-highest'>Price (highest)</option>
                <option value='name-a'>Name (a-z)</option>
                <option value='name-z'>Name (z-a)</option>
              </select>
            </li>
            <li className="mt-1 mb-5">
              <span className="font-semibold">Rating</span>
              <div className="flex items-center my-1">
                <input onChange={e => updateFilter(e)} checked={rating === "4STARSABOVE" || false} id="rating-sort-1" type="radio" value='4STARSABOVE' name="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="rating-sort-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 Stars & Above</label>
              </div>
              <div className="flex items-center my-1">
                <input onChange={e => updateFilter(e)} checked={rating === "3STARSABOVE" || false} id="rating-sort-2" type="radio" value='3STARSABOVE' name="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="rating-sort-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3 Stars & Above</label>
              </div>
              <div className="flex items-center my-1">
                <input onChange={e => updateFilter(e)} checked={rating === "2STARSABOVE" || false} id="rating-sort-3" type="radio" value='2STARSABOVE' name="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="rating-sort-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 Stars & Above</label>
              </div>
              <div className="flex items-center my-1">
                <input onChange={e => updateFilter(e)} checked={rating === "1STARSABOVE" || false} id="rating-sort-4" type="radio" value='1STARSABOVE' name="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="rating-sort-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 Stars & Above</label>
              </div>
            </li>
            <li className="mt-1 mb-5">
              <span className="font-semibold">Other Filters</span>
              <div className="flex items-center my-1">
                <input
                  onChange={e => updateFilter(e)}
                  checked={bestSellerOnly}
                  id="best-seller"
                  name="bestSellerOnly"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="best-seller" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Best Seller Only</label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={e => updateFilter(e)}
                  checked={onlyInStock}
                  name="onlyInStock"
                  id="only-instock"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="only-instock" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">INSTOCK Only</label>
              </div>
            </li>
            <li className="mt-1 mb-5 px-1">
              <button onClick={clearFilters} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Clear Filter</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
