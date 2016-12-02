import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA_dmt2e984cyYQBo-Vr3jyIJZM5eung1I';

//ES6, make sure App is constant, it won't change
//() => is the same as function()
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('children of bodom');
  };

  videoSearch(term){
    //this is ES6, it is the same as
    // YTSearch({key: API_KEY, term: 'children of bodom'}, function(videos) {
    //   this.setState(videos: videos);
    // });
    //function(videos) can be fat arrow (videos) =>
    //when videos:videos, in ES6 can do just {videos}
    //put it inside the curly brackets
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  //passing props.videos to VideoList
  render(){
    //create a function videoSearch and pass it to debounce
    //debouce return a new function that can only be called once every 300 ms
    //this is call throttle, so stop the lagging when doing search-bar
    //instead of search everytime a key is stroked, only search every 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  };

}


//<App /> is to create an instance of App, <App></App> is the same as <App />
ReactDOM.render(<App />, document.querySelector('.container'));
