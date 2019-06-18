import React, {Component} from 'react';

class MovieForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      url: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){
    this.setState({name: event.target.value})
  }

  handleUrlChange(event){
      this.setState({url: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    if(!this.state.name.trim() || !this.state.name.trim()){
      return
    }

    this.props.onMovieSubmit(this.state);

    this.setState({name: '', url: ''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Film title" value={this.state.name} onChange={this.handleTitleChange}/>
          <input type="text" placeholder="Url" value={this.state.url} onChange={this.handleUrlChange}/>
          <input type="submit" value="Comment" />
        </form>
      </div>
    );
  }

}

export default MovieForm;
