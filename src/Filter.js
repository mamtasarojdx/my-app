import React from 'react'

function Filter() {
    const number = [2,3,75,6,88]
    const filteredArray = number.filter((number)=>{
         return number % 2  === 0;
    })
  return (
    <div>
      {
        filteredArray.map((number)=>(
            <li>{number}</li>
        ))
      }
    </div>
  )
}

export default Filter