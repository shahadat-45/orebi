import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../product';
import axios from "axios";

function Items({ currentItems }) {

  return (
    <>
      <div className="flex justify-between flex-wrap gap-y-10">
        {currentItems &&
          currentItems.map((project, index) => (
            <div key={index}>
                <Product
                  allInfoCard={project}
                  to={`/products/${project.id}`}
                  title={project.title}
                  excerpt={project.category}
                  imageUrl={project.thumbnail}
                  price={'$' + project.price}
                  label={project.discountPercentage + ' %'}
                />  
            </div>
        ))}
      </div>
    </>
  );
}

function pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [currentFetch, setCurrentFetch] = useState([]);

  useEffect(()=>{
    const HandleFetchApi = async () => {
      axios.get('https://dummyjson.com/products').then((response) => {
        setCurrentFetch(response.data.products) ;
      })
    };
    HandleFetchApi();
  }, [])
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = currentFetch.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(currentFetch.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentFetch.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='flex justify-between items-end'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination flex gap-x-[15px] mt-[50px]"
        activeClassName="active bg-[#262626] text-white"
        previousClassName="page-item hidden"
        nextClassName="page-item hidden"
        pageLinkClassName="page-link flex w-9 h-9 border border-[#F0F0F0] justify-center items-center"
        renderOnZeroPageCount={null}
      />
      <p>Products from {itemOffset + 1} to {endOffset > currentFetch.length ? currentFetch.length : endOffset } of {currentFetch.length}</p>
      </div>
      
    </>
  );
}
export default pagination