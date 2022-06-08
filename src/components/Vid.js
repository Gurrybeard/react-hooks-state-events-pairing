import {React} from 'react'
import UpDown from './UpDown.js'

export default function Video({url,title,views,date,up,down,ucb,dcb}) {

  return (
    <div>
         <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <h2><em>Views:</em>{views}</h2>
      <h3><em>Created:</em> {date}</h3>
      <UpDown ucb={ucb} dcb={dcb} up={up} down={down}></UpDown>
    </div>
  )
}
