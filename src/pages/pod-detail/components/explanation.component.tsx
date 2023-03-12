import React, { useState } from "react";
import { Text } from "../../../components/text.component";

export const Explanation = ({ exp }: { exp: string }) => {
  const [readMore, setReadMore] = useState(false);

  const shortExp = React.useMemo(() => {
        return `${exp.slice(0, 100)}...` 
  }, [exp]);


  const toggleReadMore = () => setReadMore((prev) => !prev);

  const ReadMore = () => {
    return  <span 
    onClick={toggleReadMore} 
    className="pointer font-weigth-bold"
    >{readMore ? "Read Less" : "Read More"}</span>
  }

  return (
    <>
      <div
        className="position-absolute w-75 bottom-0 explanation"
        style={{ right: 0 }}
      >
        <Text variant="helper">
          {`${readMore ? exp : shortExp}`} <ReadMore />
        </Text>
      </div>
    </>
  );
};
