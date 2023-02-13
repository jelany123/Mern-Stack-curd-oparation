
import React, { useEffect, useState } from 'react';

import {useNavigate, useParams,Link} from 'react-router-dom';

import axios from 'axios';

function ShowBookDetails() {
const {id} =useParams();
const [booklist,setBook ]= useState([]);
const navigate =useNavigate()

useEffect(()=>{
  axios.get(`http://localhost:5000/api/books/${id}`)
  .then((res)=>{
    setBook(res.data);
  })
  .catch((err=>{
    console.log('error from show booklist')
  }))
},[id]);

const onDeleteClick = (id) => {
  axios
    .delete(`http://localhost:5000/api/books/${id}`)
    .then((res) => {
      navigate('/');
    })
    .catch((err) => {
      console.log('Error form ShowBookDetails_deleteClick');
    });
};
const bookItem = (
  <div>
    <table className='table table-hover table-dark'>
    <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{booklist.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{booklist.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{booklist.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{booklist.publisher}</td>
          </tr>
          <tr>
            <th 
            scope='row'>5</th>
            <td>Published Date</td>
            <td>{booklist.published_date}</td>
          </tr>
          <tr>
            <th 
            scope='row'>5</th>
            <td>Updated Date</td>
            <td>{booklist.updated_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{booklist.description}</td>
          </tr>
        </tbody>
    </table>
  </div>
)

  return (
    <div className='col-md-10 m-auto'>
      <Link to ={`/`}>
        home
      </Link>
      
      {bookItem}


    <button type='button'className='btn btn-outline-danger btn-lg btn-block'
    onClick={()=>{
      onDeleteClick(booklist._id) ;  
       }}>
       Delete Book
    </button>
    <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-book/${booklist._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Book
            </Link>
          </div>
    </div>
  )
}

export default ShowBookDetails