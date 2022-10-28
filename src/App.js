import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';
import PostList from './Components/PostList';
import {Routes,Route} from 'react-router-dom';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"black",fontStyle:"italic",color:"white",padding:"10px",margin:"0px"}}>Navbar MERN app</h1>
      {/* route Routes ka child h  */}
      <Routes>
        <Route path='/' element={<PostList/>} />
        <Route path='/editPost'  element={<EditPost/>} />
        <Route path='/addpost' element={<AddPost/>} />
      </Routes> 
    </div>
  );
}

export default App;
