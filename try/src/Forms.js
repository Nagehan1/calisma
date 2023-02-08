import React from 'react'

function Forms(props) {
  return (
    <div>
        
         <form>
         <h2>{props.title}</h2>
    <input type="text"  placeholder="write your name" />
    <button>submit</button>
</form>



    </div>
  )
}

export default Forms