import React from 'react'
import { Link } from 'react-router-dom'

function Boards({item: {id, title, content}}) {
    return (
        <div className="card">
  <div className="card-header">
    <Link to={`/postView/${id}`}>{title} : {id}</Link>
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{content}</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
    )
}

export default Boards
