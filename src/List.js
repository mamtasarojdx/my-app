import React from 'react'

function List() {
    const Array = [
        {id:1, name:"Akash", age:25},
        {id:2, name:"Mamta", age:24},
        {id:3, name:"Makshi", age:3}
    ]
  return (
    <div>
      {
        Array.map(item=>(
            <li key={item.id}>
            <h1>My name is {item.name}</h1>
           <h2>My age is {item.age}</h2>
           </li>
        ))
      }
    </div>
  )
}

export default List
