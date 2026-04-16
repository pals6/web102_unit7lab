import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
// part 6 complete
// part 7 complete
import './EditPost.css'

const updatePost = async (event) => {
    event.preventDefault()
    await supabase
        .from('Posts')
        .update({ title: post.title, author: post.author,  description: post.description})
        .eq('id', id)
    window.location = "/"
}

const deletePost = async (event) => {
    event.preventDefault()
    await supabase
        .from('Posts')
        .delete()
        .eq('id', id)    
    window.location = "/"
}

const EditPost = ({data}) => {

    const {id} = useParams()
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""})

    const deletePost = async (event) => {
        event.preventDefault()
        await supabase 
        .from('posts')
        .delete()
        .eq('id', id)
        window.location = "/"
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick = {deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost