import React from 'react';
import VideoListItem from './video_list_item';
//dont need state, so just use function based component
const VideoList = (props) => {
  //array.map(function(video){return video}) is for each video in array
  const videoItems = props.videos.map((video) => {
    //passing the unique etag from youtube data as key (aka ID)
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
