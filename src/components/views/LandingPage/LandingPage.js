import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { setCookie } from '../../../utils/cookie'
import InfiniteScroll from 'react-infinite-scroll-component';
import boards from './Boards';
import Boards from './Boards';
import Loader from './Loader';
import EndMsg from './EndMsg';

function LandingPage() {
    const navigate = useNavigate()
    const [items, setitems] = useState([])
    const [hasMore, sethasMore] = useState(true)

    useEffect(() => {
        const getBoards = async () => {
            const res = await axios.get('http://localhost:3000/boards?limit=10', {withCredentials: true})
            const data = await res.data
            setitems(data)
        }
        getBoards()
        
    }, [])
    console.log("items",items[items.length -1])

    const fetchBoards = async (cursor) => {
        const res = await axios.get(`http://localhost:3000/boards?limit=10`,{ params: {cursor: cursor}}, {withCredentials: true})
        return await res.data
    }

    const fetchData = async () => {
        console.log("last", items.lastItem)
        const boardsFromServer = await fetchBoards(items[items.length-1].id)

        setitems([...items, ...boardsFromServer])
        console.log('hello')
        if(boardsFromServer.length === 0){
            sethasMore(false)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3000/auth/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
         <div class="p-3 mb-2 bg-secondary text-white"><Link to="/post" class="btn btn-primary">+</Link></div>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<Loader></Loader>}
                endMessage={
                    <EndMsg></EndMsg>
                }
                >
                    <div className='container'>
                        <div className="row m-2">
                            {items.map((item) => {
                    return <Boards key={item.id} item={item}/>
                })}
                        </div>
                    </div>
                    {/* 화면이 좌우로 흔들리는 현상 방지 * */}
                    <div></div> 
                
            </InfiniteScroll>
            </div>
            
           
        
    )
}

export default LandingPage
