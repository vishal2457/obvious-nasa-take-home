import { useLocation, useRoute } from "wouter";
import EyeIcon from "../../assets/eye.png";
import BackIcon from "../../assets/back.png";
import { Image } from "../../components/image.component";
import { Text } from "../../components/text.component";
import { nasaApodStore } from "../../store/nasa-apod.store";
import "./pod-detail.style.css";

export const ApodDetail = () => {
  const [_, params] = useRoute("/detail/:id");
  const [__, navigate] = useLocation();
  
  const pod = nasaApodStore((state) =>
    state.getDetail(decodeURI(params?.id || ""))
  );


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
      <div
        className="position-absolute w-75 bottom-0 explanation"
        style={{ right: 0 }}
      >
        <Text variant="helper">{pod?.explanation}</Text>
      </div>
     
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
