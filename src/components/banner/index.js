import React from 'react';
import ImageStyle from "../../styles/imageStyle";
// import { Container } from './styles';

function Banner() {
    let {banner} = ImageStyle;
  return(
      <>
        <img className="fluid-container img-fluid" style={{width:"100%", height:160}} src={banner}></img>
      </>
  );
}

export default Banner;