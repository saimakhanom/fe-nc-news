import "../styles/home.css";
import bookImg from "../assets/no-slogan-logo.png";
import slogan from "../assets/slogan.png";

export default function Home() {
  return (
    <div>
      <div className="header">
        <img src={slogan} alt="nc news slogan reads breaking boundaries, breaking news" className="headerImgSlogan"/>
        <img src={bookImg} alt="open pink book icon" className="headerImgBook"/>
      </div>
    </div>
  );
}
