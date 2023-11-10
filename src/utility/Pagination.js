function Pagination({pages, currentPage, setCurrentPage}){
  let pagesLi = [];
  for(let i = 1; i <= pages; i++){
    pagesLi.push(<li className="page-item page-link bg-dark text-light" onClick={()=> setCurrentPage(i)}>{i}</li>)
  }
  console.log(pages)

  return(
    <nav className="d-flex justify-content-center" aria-label="Page navigation example">
      <ul class="pagination">
        {currentPage !== 1 && <li className="page-item page-link bg-dark text-light">Previous</li>}
        {pagesLi}
        {<li class={`page-item page-link bg-dark text-light ${currentPage === pages ? "invisible" : ""}`}>Next</li>}
      </ul>
    </nav>
  )
}

export default Pagination;