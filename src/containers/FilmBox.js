import React, {Component} from 'react';
import FilmList from '../components/FilmList';
import MovieForm from '../components/MovieForm';

class FilmBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
     this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
  }

  handleMovieSubmit(newFilm){
    newFilm.id = Date.now();
    const updatedFilms = [...this.state.data,newFilm];
    this.setState({data: updatedFilms});
  }


  render(){
    return(
      <div>
      <h1>Films</h1>
      < hr />
      <FilmList data={this.state.data}/>
      <MovieForm onMovieSubmit={this.handleMovieSubmit} />
      </div>
    );
  }

}

export default FilmBox;
