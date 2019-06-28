import React from "react";
const CommentDetail = props =>{
   return(
       <div className="comment">
            <a href="/" className="avatar">
             <img alt="avatar" src=""></img>
            </a>
            <div className="content">
              {props.author}
            </div>
       </div>
   );
};

export default CommentDetail;