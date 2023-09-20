import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function PostPage() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const navigate = useNavigate()

    const onTitleHandler = (e) => {
        settitle(e.target.value)
    }

    const onContentHandler = (e) => {
        setcontent(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const body = {title, content}
        axios.post("http://localhost:3000/boards", body, {withCredentials: true})
        .then(res => {
            if(res.status === 201){
                navigate("/")
            }else{
                alert("글쓰기가 실패했습니다.")
            }
        })
    }
    return (
        <form onSubmit={onSubmitHandler}>
  <div class="form-group">
    <label for="titleInput">제목</label>
    <input class="form-control" value={title} id="titleInput" placeholder="제목" onChange={onTitleHandler}/>
  </div>
 
  <div class="form-group">
    <label for="contentTextarea">내용</label>
    <textarea class="form-control" value={content} id="contentTextarea" rows="3" onChange={onContentHandler}></textarea>
  </div>

  <div style={{ padding: 15}}><button type="submit" class="btn btn-dark" >글쓰기</button></div>
</form>
    )
}

export default PostPage
