import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet(props) {
  // console.log(props.tweet.user);
  return (
    <div className='tweet'>
      <ProfileImage image={props.tweet.user.image} />

      <div className='body'>
        <div className='top'>
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          {/* OR <User userData={props.tweet.user} /> and access each value on the User component */}
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
