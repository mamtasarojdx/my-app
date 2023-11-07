import React from 'react'

function Map() {
    const MyArray = ["apple","banana","mango","kiwi","litchi"]
    const ModifiedArray = MyArray.map((MyArray)=>{
        return MyArray.toUpperCase()
    })
  return (
    <div>
      {ModifiedArray.map(MyArray=>
        <h3>{MyArray}</h3>)}
    </div>
  )
}

export default Map
