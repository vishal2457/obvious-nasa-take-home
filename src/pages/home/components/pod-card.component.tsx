import React from "react";
import { useLocation } from "wouter";
import { Image } from "../../../components/image.component";
import { Text } from "../../../components/text.component";
import { SingleApodType } from "../../../store/nasa-apod.store";
import "../home.style.css";

export const PodCard = ({ pod }: { pod: SingleApodType }) => {
  const [_, navigate] = useLocation();

  

  return (
    <div className="col-lg-4 pointer position-relative p-3">
      <div className="card-bg" onClick={() => navigate(`/detail?title=${encodeURI(pod.title)}`)}>
        <Image src={pod.url} className="card-img-top nasa-img" loading="lazy" />
        <div className="card-body py-4 d-flex align-items-center flex-column">
          <Text text={pod.title} className="card-title" />
          <Text
            text={pod.copyright && `Copyright: ${pod.copyright}`}
            className="card-text"
          />
        </div>
        <div className="date-pill">
          <Text>{pod.date}</Text>
        </div>
      </div>
    </div>
  );
};
