import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App'
import Login from './components/Login'

class Index extends React.Component {


  constructor(props) {
    super(props);
   
  }



}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Login/>, domContainer);