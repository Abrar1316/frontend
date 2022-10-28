import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const AddPost = () => {
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    const lookOn = (e)=>{
        setTitle(e.target.value)
    }
    const addpost=()=>{
        let post={
            title:title,
            imageUrl:imageUrl,
            description:description
        }
        console.log(post);
        axios.post('http://localhost:5000/api/post/addpost',post).then((res)=>{
            alert(res.data);
        })
    }
    return(
        <>
        <Link to={'/'}><button className='btn btn-primary'>home</button></Link>
        <div className = "row justify-content-center" >
            <div className = "col-6">
            <div>
                <input type="text" placeholder="Title" className="form-control" 
                value={title} onChange={lookOn} />
                <input type="text" placeholder="Paste your imageUrl" className="form-control"
                 value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
                <textarea style={{backgroundColor:"yellow"}} placeholder="write something" className="form-control" cols="30" rows="10"
                 value={description} onChange={(e)=>{setDescription(e.target.value)}}>
                 </textarea>
                <button onClick={addpost} style={{marginLeft:"20px"}} className="btn btn-success float-start">Add Post</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default AddPost;