// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

// const CreateBook = (props) => {
//   // Define the state with useState hook
//   const navigate = useNavigate();
//   const [book, setBook] = useState({
//     title: '',
//     isbn: '',
//     author: '',
//     description: '',
//     published_date: '',
//     publisher: '',
//   });

 



//     axios
//       .post('http://localhost:5000/api/books', book)
//       .then((res) => {
//         setBook({
//           title: '',
//           isbn: '',
//           author: '',
//           description: '',
//           published_date: '',
//           publisher: '',
//         });

//         // Push to /
     
//       })
//       .catch((err) => {
//         console.log('Error in CreateBook!');
//       });
//   };

//   return (
//     <div className='CreateBook'>
//       <h1>hekko

//       </h1>
//     </div>
//   );

// export default CreateBook;
import axios from 'axios';
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';

//refferrence https://surajsharma.net/blog/axios-post-form-data
//and https://blog.logrocket.com/mern-stack-tutorial/

const CreateBook = () => {
// data faching 


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
const onChange=(e)=>{
  setbook({...book,[e.target.name]:e.target.value});
}
const onSubmit= (e)=>{
  e.preventDefault();
            axios
              .post ('http://127.0.0.1:5000/api/books/',book)
                .then((res)=>{
                setbook({
                title:'',
                isbn:'',
                author:'',
                description:'',
                publisher_date:'',
                publisher:'',

          })
          //push to/
          Navigate('/')
          })
          .catch((err)=>{
          console.log('error in create book')
          })


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
                    type='Date'
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

export default CreateBook
