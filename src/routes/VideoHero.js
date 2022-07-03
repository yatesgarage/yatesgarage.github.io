import React from 'react';

function VideoHero() {
  return (
    <video loop autoplay muted>
      <source src="media/Hero-Compressed.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoHero;
