import profilePicture from "../assets/profile-picture.avif";

export default function CurrentUser() {
  return (
    <div className="currentUser">
      <img
        src={profilePicture}
        alt="user profile picture"
        className="profilePicture"
      />
      <p>Saima</p>
    </div>
  );
}
