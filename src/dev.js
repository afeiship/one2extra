import './dev.scss';
import ReactMuiSwitch from './main';

/*===example start===*/

// install: npm install afeiship/react-mui-switch --save
// import : import ReactMuiSwitch from 'react-mui-switch'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log('switch onchange:->', e.target.value);
  };

  render(){
    return (
      <div className="hello-react-mui-switch">
        <ReactMuiSwitch onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
