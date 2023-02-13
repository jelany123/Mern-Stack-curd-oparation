import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useNavigate  ,useParams} from 'react-router-dom';

//refferrence https://surajsharma.net/blog/axios-post-form-data
//and https://blog.logrocket.com/mern-stack-tutorial/

const UpdateBookInfo = (props) => {
// data faching 

const { id } = useParams();
//state book.
const  Navigate= useNavigate();
const [book,setbook]= useState({
title:'',
isbn:'',
author:'',
description:'',
published_date:'',
publisher:'',

});

useEffect(()=>{
 axios
        .get(`http://127.0.0.1:5000/api/books/${id}`)
                .then((res)=>{
                setbook({
                title:res.data.title,
                isbn:res.data.isbn,
                author:res.data.author,
                description:res.data.description,
                published_date:res.data.published_date,
                publisher:res.data.publisher,
            })
            .catch((err)=>{
            console.log('error in create book')
            })
  
          })
},[id])
const onChange=(e)=>{
  setbook({...book,[e.target.name]:e.target.value});
}
const onSubmit= (e)=>{
  e.preventDefault();
  const data = {
    title: book.title,
    isbn: book.isbn,
    author: book.author,
    description: book.description,
    published_date: book.published_date,
    publisher: book.publisher,
  };
          //push to/
          axios
          .put(`http://localhost:5000/api/books/${id}`, data)
          .then((res) => {
            Navigate(`/show-book/${id}`);
          })
          .catch((err) => {
            console.log('Error in UpdateBookInfo!');
          });

};
    

  return (
    
    <div className=' CreateBook'>
      <br/>
      <div class="container">
      <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
      </Link></div><br/>
        <div class="container">
        
        
            
        <br />
          <form onSubmit={onSubmit}>
                  <div>
                    <input className='btn-block'
                    type='text'
                    placeholder='Title of the book'
                    name ='title'
                    value={book.title}
                    onChange={onChange}

                    />
                  </div>

                  <br/>
                  <div>
                    <input className='btn-block'
                    type='text'
                    placeholder='ISBN'
                    name ='isbn'
                    value={book.isbn}
                    onChange={onChange}

                    />
                  </div>

                  <br/>
                  <div>
                    <input className='btn-block' 
                    type='text'
                    placeholder='Author'
                    name ='author'
                    value={book.author}
                    onChange={onChange}
                    />
                  </div><br/>

                  <div>
                    <input className='btn-block'
                    type='text'
                    placeholder='Describe this book'
                    name ='description'
                    value={book.description}
                    onChange={onChange}
                    />
                  </div><br/>

                  {/* <div>
                    <input className='btn-block'
                    type='text'
                    placeholder='ISBN'
                    name ='isbn'
                    value={book.title}
                    onChange={onChange}
                    />
                  </div><br/> */}

                  <div>
                    <input className='btn-block'
                    type='date'
                    placeholder='published_date'
                    name ='published_date'
                    value={book.published_date}
                    onChange={onChange}
                    />
                  </div>
                  <br/>

                  <div>
                    <input className='btn-block'
                    type='text'
                    placeholder='Publisher'
                    name ='publisher'
                    value={book.publisher}
                    onChange={onChange}
                    />
                  </div><br/>

                  <div>
                  <input
                type='submit'
                className='btn btn-outline-warning  mt-4'/>
              </div>

          </form>

          </div>
      
    </div>
  )
}

export default UpdateBookInfo;
