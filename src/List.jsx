import React from 'react';

const List = (props) => {

  const listitems = props.list.map((item, index) =>
    <li onClick={props.removeTodo.bind(this, item)} key={index}>{item}</li>
  );

  return (
    <ul>{listitems}</ul>
  );
}

export default List;