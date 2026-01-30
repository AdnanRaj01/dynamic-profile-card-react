function ProfileCard({ name, bio, avatar, isFollowed, onFollow }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <button onClick={onFollow}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
