const ProfileImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} className='profile' alt='profile' />
    </div>
  );
};

export default ProfileImage;
