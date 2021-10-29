import React , { useEffect , useState } from 'react'
import axios from 'axios'
import News from '../components/News'

const news = () => {

    const [data , setData] = useState([]);

    useEffect(async()=>{
        const res = await axios.get('https://newsapi.org/v2/everything?q=agriculture&sortBy=publishedAt&apiKey=3232440728f249d9b8a213d6e2f13a86')
        setData(res.data.articles);
        console.log(res.data.articles);
    },[])

    return (
        <div style = {{display:"flex" , flexDirection: "column" , gap: "20px" , padding: "50px"}}>
            {data.map((value , idx)=>(
                <News key = {idx} url = {value.url} image = {value.urlToImage} title = {value.title} author = {value.author} description = {value.description} sourceName = {value.source.name}/>
            ))}
        </div>
    )
}

export default news
