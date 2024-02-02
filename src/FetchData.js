import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>setData(data))
        // .then(res=>console.log(data))
        .catch(error=>console.log(error))
     })
  return (
    <div>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
))}
    </div>
  )
}

export default FetchData;

