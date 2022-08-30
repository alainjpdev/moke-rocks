import * as React from 'react';
import "./Pagination.css"


export default function Pagination() {
  return (
    <>
        <div className="pagination-container">
            <a href="#" class="previous">&laquo; Previous</a>
            <a href="#" class="next">Next &raquo;</a>
        </div>
    </>
  );
}