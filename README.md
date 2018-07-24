# react-mui-switch
> Switch for mui

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-mui-switch --registry=https://registry.npm.taobao.org
```

```js
import ReactMuiSwitch from 'react-mui-switch';
```

```scss
// customize your styles:
$react-mui-switch-options:(
);

@import 'node_modules/react-mui-switch/dist/style.scss';
```


## usage:
```jsx

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

```
