import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Index extends React.Component {
  constructor(props) {
    super(props);
   
  }



}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App/>, domContainer);