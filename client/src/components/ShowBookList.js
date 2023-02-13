import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from './BookCard';
function ShowBookList() {
    const [bookee ,setBook] =useState([]);
    useEffect(() => {
        axios
          .get('http://localhost:5000/api/books')
          .then((res) => {
            setBook(res.data);
          })
          .catch((err) => {
            console.log(err.massage);
          });
      }, []);
    const booklist =  bookee.length === 0?'there is no book record':bookee.map((items ,k) =><BookCard book ={items}key={k} />) ;
    return (
    <div className='ShowBookList'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <br/>
                <h2 className='display-4 text-center'>
                    book List

                </h2>
            </div> 
            <div  className=' col-md-11'>
                <Link 
                 to ='/create-book' 
                className='btn btn-outline-warning float-right'>
                 +Add New Book
                </Link>
                <br />
             <br />
                <hr />
            </div>
             <div className='list'>
                 {booklist}
            </div>  
                
        </div>

        </div>
    </div>





  );
};

export default ShowBookList;