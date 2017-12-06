import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './commonts/head'

class Index extends React.Component{
  render(){
    return (
      <div> 
        <ComponentHeader/>
        <h2>v1.1 component-header</h2>
      </div>
    )
  }
}

ReactDOM.render(<Index/>,document.getElementById('example'));