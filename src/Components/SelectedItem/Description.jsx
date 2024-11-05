import React from 'react'

const Description = ({item,active}) => {
  return (
    <div style={{marginTop:'30px'}}>
        <h1 >Description</h1>
        <h4>{item.description}</h4>

    </div>
  )
}

export default Description