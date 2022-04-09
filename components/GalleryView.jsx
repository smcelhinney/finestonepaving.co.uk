import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

const Card = styled.div``;

const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)",
  },
  settings: {
    overlayColor: "rgba(255, 237, 225, 1)",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear",
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4,
  },
  caption: {
    captionColor: "rgba(241, 191, 152, 1)",
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2",
  },
};

const GalleryWithThumbnails = () => {
  return (
    <div id="gallery-with-links" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="content">
          <div
            className="embedsocial-album"
            data-ref="75baac9aa48ddd44dae5c78cddc5928bb1e4fd1a"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryWithThumbnails;
