import { useLocation } from "wouter";
import BackIcon from "../../assets/back.png";
import EyeIcon from "../../assets/eye.png";
import { Image } from "../../components/image.component";
import { Text } from "../../components/text.component";
import { nasaApodStore } from "../../store/nasa-apod.store";
import { Explanation } from "./components/explanation.component";
import "./pod-detail.style.css";

export const ApodDetail = () => {
  const [__, navigate] = useLocation();
  
  const pod = nasaApodStore((state) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
   const title = Object.fromEntries(urlSearchParams).title;
     
   return state.getDetail(decodeURI(title || ""))
  });

  


  return (
    <div
      style={{ backgroundImage: `url(${pod?.url})` }}
      className="bg-img position-relative"
    >
      <div className="header-container">
        <p className="text-warning m-0" >{pod?.copyright}</p>
        <Text variant="heading" className="fw-bolder">
          {pod?.title}
        </Text>
        <Text>{pod?.date}</Text>
      </div>
      <Explanation exp={pod?.explanation || ''} />
     
      <a href={pod?.hdurl} target="_blank">
        <div 
        className="icon-container" 
        style={{ top: "10%", right: "5%" }}
        title="view hd version">
          <Image src={EyeIcon} className="icon" />
        </div>
      </a>
      <div
          className="icon-container"
          title="go back"
          onClick={() => navigate('/')}
        >
          <Image src={BackIcon} className="icon" />
        </div>
    </div>
  );
};
