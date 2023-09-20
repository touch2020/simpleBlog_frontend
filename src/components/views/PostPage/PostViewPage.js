import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function PostViewPage({match}) {
    const params = useParams()
    const navigate = useNavigate()
    const [boardDetail, setboardDetail] = useState({})
    const {id} = params
    useEffect(() => {
        const response = axios.get(`http://localhost:3000/boards/${id}`).then(res => setboardDetail(res.data))
    }, [])

    const onDeleteHandler = (e) => {
        axios.delete(`http://localhost:3000/boards/${id}`).then(navigate("/"))
    }
    return (
    
        <div className="card" style={{style: "18rem"}}>
            
  <div className="card-body">
    <h5 className="card-title">{boardDetail.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">{boardDetail.content}</p>

    <button type="button" onClick={onDeleteHandler}>삭제</button>
  </div>

 
</div>
    )
}

export default PostViewPage
