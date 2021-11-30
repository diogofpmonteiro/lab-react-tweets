import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ tweetObj }) {
  console.log(tweetObj);
  return (
    <div className='tweet'>
      <ProfileImage imageUrl={tweetObj.user.image} />

      <div className='body'>
        <div className='top'>
          <User userData={tweetObj.user} />
          <Timestamp time={tweetObj.timestamp} />
        </div>

        <Message message={tweetObj.message} />
        <Actions />
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
