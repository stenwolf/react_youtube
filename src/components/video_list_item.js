import React from 'react';

//only need video from props, dont need the whole thing
//ES6 can do just {video}
//this is same as video = props.video
//onVideoSelect = props.onVideoSelect
const VideoListItem = ({video, onVideoSelect}) =>{
  //same as const video = props.video; if instead of {video}, use props
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl}/>
        </div>

        <div className="media-body">
          <div className='media-heading'>{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
