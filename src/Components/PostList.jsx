import React,{useEffect,useState} from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import {Link} from 'react-router-dom'

const PostList = () => {

  const [posts,setPost] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/post/getallpost').then((res)=>{
      setPost([...res.data])
      console.log(res);
    }).then(err=>{
      console.log(err);
    })
  },[])
  console.log(posts.length);
  return (
    <div> 
        <h1>All Posts</h1>
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
          </tr>
        </thead>
        <tbody>

  
    {
          posts.length != "0" ? posts.map((post)=>{
            return (<><tr><td>{post.title}</td>
            <td>{post.imgUrl}</td>
            <td>{post.description}</td></tr></>)
          }): <h1>no post avail</h1>
        }
      
 
  </tbody>
        </table>
        <Link to={'/addpost'}><button className='btn btn-primary'>AddPost</button></Link>
    </div>
  )
}

export default PostList

