import { v4 as uuid } from "uuid";
import "./Pagination.css"

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
        className={`page-item ${
          i === currentPage && "active"
        }`}
        onClick={() => setCurrentPage(i)}
      >
        <a class="page-link" href="#">
            {i}
        </a>
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
            className="page-item"
            key={uuid()}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
        )}
        {pagesLi}
        {
          <li
            className={`page-item   ${
              (currentPage === pages || pages === 0) && "invisible"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Pagination;
