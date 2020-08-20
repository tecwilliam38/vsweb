import React from 'react';
import ImageStyle from "../../styles/imageStyle";

function Banner() {
    let {banner} = ImageStyle;
  return(
      <>
        <img className="fluid-container img-fluid" style={{width:"100%", height:140}} src={banner}></img>
      </>
  );
}

export default Banner;