import React, {Component} from 'react';

function Film (props){
  return (
    <div>
    <a href={props.url}>{props.name}</a>

    </div>
  );
}
export default Film;
