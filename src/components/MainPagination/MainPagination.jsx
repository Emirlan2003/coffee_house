import React from 'react';
import './MainPagination.css'

const MainPagination = ({ cardsPerPage, totalCards, paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(item => (
                        <li className="page-item" key={item}>
                            <div className="page-link" onClick={() => paginate(item)}>
                                  {item}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MainPagination;