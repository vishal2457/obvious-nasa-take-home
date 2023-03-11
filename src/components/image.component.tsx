import React from 'react'
import {Img, ImgProps} from 'react-image'

export const Image = ({src, className, ...rest}: ImgProps) => {
  return (
    <Img 
    loader={<p>loading...</p>}
    src={src}
    className={className}
    {...rest}
    />
  )
}
