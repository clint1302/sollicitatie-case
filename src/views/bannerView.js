import React from "react";
import "../css/banner.css";
import BannerImage from '../media/background.png'
import BannerLogo from '../media/logo.svg'

export default class BannerView extends React.Component {

  render() {

    const bannerImg = {
      backgroundImage: `url(${BannerImage})`
    };

    return (
      <div className="banner-image" style={bannerImg}>
        <div className="banner-image-overlay">
          <img src={BannerLogo} draggable="false" className="mx-auto d-block img-responsive" alt="aligment" />
        </div>
      </div>
    );

  }
}
