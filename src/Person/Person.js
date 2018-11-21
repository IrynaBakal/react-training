import React from 'react';
import './Person.css';

const person = (props) => {
  // console.log('props', props);
  return (<div className={'Person'}>
    <p onClick={props.click}>I'm a {props.name} and my age is {props.age}!</p>
    <p>{props.children}</p>
    <input type={'name'} onChange={props.change} value={props.name} />
  </div>);
};

export default person;