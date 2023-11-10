import { v4 as uuid } from "uuid";

/**Renders pagination element
 *
 * Props:
 * - pages
 * - currentPage
 * - setCurrentPage fn
*/
function Pagination({ pages, currentPage, setCurrentPage }) {
  let pagesLi = [];
  for (let i = 1; i <= pages; i++) {
    pagesLi.push(
      <li
        key={uuid()}
        className={`page-item page-link text-light bg-dark ${
          i === currentPage && "opacity-75"
        }`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </li>
    );
  }

  return (
    <nav
      className="d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        {currentPage !== 1 && (
          <li
            className="page-item page-link bg-dark text-light"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </li>
        )}
        {pagesLi}
        {
          <li
            className={`page-item page-link bg-dark text-light ${
              (currentPage === pages || pages === 0) && "invisible"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </li>
        }
      </ul>
    </nav>
  );
}

export default Pagination;
