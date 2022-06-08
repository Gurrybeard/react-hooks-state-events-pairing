import React from 'react'

export default function Comment({comments,sH,handleSH}) {
    const c = comments.map(e => {
       return <div key={e.id}>User: {e.user} --{e.comment}</div>
   })

 if (sH){ return (
      
    <div>
        <hr />
        <h1>Comments:</h1>
        <button onClick={handleSH}>{}hide comments</button>
        {c}
        
    </div>
  )}
  else{
      return(
        <div>
        <hr />
        <h1>Comments:</h1>
        <button onClick={handleSH}>{}show comments</button>
       
        
    </div>
      )
  }
}
