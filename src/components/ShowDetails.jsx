import React from 'react'

function ShowDetails(props) {
    console.log(props.details)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default ShowDetails
