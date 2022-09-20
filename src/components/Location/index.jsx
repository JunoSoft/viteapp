import React from 'react';

function index(props) {
  onchangeHandler = (event)=>{
event.preventDefault();
const a = 4;
return a
  }
  return (
    <div>
      GEO lOCATION DATA
      <input type="text" onChange={onchangeHandler}/>◘
    </div>
  );
}

export default index;