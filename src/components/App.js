import { getByTitle } from "@testing-library/react";
import video from "../data/video.js";
import Vid from "./Vid";
import { useState } from "react";
import Comment from "./Comment.js";

function App() {
 // console.log("Here's your data:", video);
  const [upvotes,setUpvotes]=useState(video.upvotes)
  const [downvotes,setDownvotes]=useState(video.downvotes)
  const [showHide,setShowHide] = useState(true);
  function handleUpvotes(){
    setUpvotes(upvotes+1);
  }
  function handleDownvotes(){
    setDownvotes(downvotes-1);
  }
  function handleShowHide(){
    setShowHide(!showHide)
    console.log(showHide)
  }

  return (
    <div className="App">
      <Vid url={video.embedUrl} title={video.title} views={video.views} date={video.createdAt} up={upvotes} down={downvotes} ucb={handleUpvotes} dcb={handleDownvotes}></Vid>
      <Comment comments={video.comments} sH={showHide} handleSH={handleShowHide}></Comment>

    </div>
  );
}

export default App;
