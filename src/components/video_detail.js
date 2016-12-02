import React from 'react';

const VideoDetail = ({video}) => {

  //while YTSearch is trying to get data from youtube,
  //react will still go ahead and render the components
  //so need to check if theres any video passed in to the component
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  //this is the same as const url = 'https://www.youtube.com/embed/' + videoId;
  //note: have to use `` instead of single quote
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>

      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
