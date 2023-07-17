import "../styles/contentcard.css";
import testImg from "../assets/images/Communities/GymMemes/gymmemes1.jpg";
import upvote from "../assets/images/Default_Images/upvote.svg";
import downvote from "../assets/images/Default_Images/downvote.svg";

const ContentCard = () => {
  return (
    <div className="content-card">
      <div className="voteBar">
        <img className="upvote" src={upvote}></img>
        <span>52</span>
        <img className="downvote" src={downvote}></img>
      </div>
      <div className="content-header">
        <div className="userPostInfo">
          <div className="subreddit">r/GYMmemes</div>
          <div className="postedBy">Posted by Bug</div>
        </div>
        <div className="titleTags">
          <div className="post-title">
            Have you seen Hikers? Those mfs have cows at this point
          </div>
          <div className="tags"></div>
        </div>
      </div>
      <div className="main-content">
        <img className="test-image" src={testImg}></img>
      </div>
      <div className="content-options">
        <button className="comments">Comments</button>
        <button className="award-post">Award</button>
        <button className="share-post">Share</button>
        <button className="save-post">Save</button>
        <button className="misc-post-options">...</button>
      </div>
    </div>
  );
};

export default ContentCard;
