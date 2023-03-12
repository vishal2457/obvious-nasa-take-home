import React from "react";
import { Img, ImgProps } from "react-image";
import { Text } from "./text.component";

export const Image = ({ loader, ...rest }: ImgProps) => {
  return <Img loader={loader || <ImgPlaceholder />} {...rest} />;
};

function ImgPlaceholder() {
  return (
    <div className="img-placeholder d-flex justify-content-center align-items-center">
      <Text>Loading</Text>
    </div>
  );
}
