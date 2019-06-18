import React, {Component} from 'react';
import Film from './Film'

const FilmList = (props) => {

  const filmNodes = props.data.map((film) => {
    return (
      <Film name={film.name} url={film.url} key={film.id} />
    )
  });
  console.dir(filmNodes);
  return (
    //Loop
    <div>
    {filmNodes}
    </div>
  );
}

export default FilmList;
