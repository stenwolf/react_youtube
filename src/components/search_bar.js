//{Component} is the same as var Component = React.Component
//ES6 syntax so that instead of extends React.Component, just need to do
//extends Component
import React, {Component} from 'react';


//this is function component
// const SearchBar = () => {
//   return <input />;
// }

//this is class component
class SearchBar extends Component {

  constructor(props){
    super(props);
    //initialize state in class based component, only class based has state
    //whenever user update this input, update this.state.term
    //whenever update state, causes component to re-renders
    this.state ={term: ''};
  }


  //give ability to render to return JSX
  //every class base component must have render
  render() {
    //return <input onChange={this.onInputChange} />;

    //this will be the same as above line,
    //onChange={event => this.setState({term: event.target.value})}
    //without the implementation of onInputChange
    //this is to clean up code, pretty much implement the method into onChange
    //if only 1 event, can use event => ... without parenthesis
    //return <input onChange={(event) => console.log(event.target.value)} />;

    // return(
    //   //change term when input is changed
    //   //always manipulate state with this.setState
    //   //using setState to inform react state is changing
    //     <div>
    //
    //       <input onChange={event => this.setState({term: event.target.value})} />
    //       //Value of the input: {this.state.term}
    //     </div>
    //
    //
    //
    // );

    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='Search Bar'
        />
      </div>
    );
  }

  //hand user event
  //this is just method name, can be whatever
  //but follow the naming convention
  onInputChange(term) {
    //{term} means term: term
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
