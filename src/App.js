import React, { Component } from 'react';
import M_topmenu from './component/M_topmenu';
import M_botGrid from './component/M_botGrid';
import LocalTime from './component/LocalTime';
import M_osmMap from './component/M_osmMap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
  redvComponentName: PropTypes.string,  // 1 : default, 2 : left [un]visible, 3 : bottom [un]visible
};

const defaultProps = {
  redvComponentName: "App"
};
 
//function App() {
class App extends Component{
  constructor(props){
    super(props);

    this.setLayoutType = this.setLayoutType.bind(this);    
  }  

  state = {
    layoutType: 1,
    leftVisible: true,
    bottomVisible: true,
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    //console.log("shouldComponentUpdate");
    const{layoutType} = this.state;
    if(layoutType === nextState.layoutType)
    {
      console.log("same!" + layoutType + ", "+ nextState.layoutType);
      return (true);
    }
    else{
      console.log("not same!" + layoutType + ", "+ nextState.layoutType);
      // call layout handle function

      return (true);
    }
  }

  componentWillReceiveProps(nextProps)
  {
    console.log("componentWillReceiveProps");
  }

  setLayoutType(data){
    console.log("setLayoutType : " + data+" #");

  }

  setLayoutType1=(data)=>{
    const{layoutType, leftVisible, bottomVisible} = this.state.layoutType;
    console.log("setLayoutType1 : " + data+" #");
    this.setState({layoutType: data});

    if(data == 1)
    {
      this.setState({leftVisible: true});
      this.setState({bottomVisible: true});

      console.log("true");
    }
    else if(data == 2)
    {
      this.setState({leftVisible: !this.state.leftVisible});
      console.log("left state!!! : "+leftVisible);

    }
    else if(data == 3)
    {
      this.setState({bottomVisible: !this.state.bottomVisible});
    }
  }

  render(){
    let leftStyle={
      width:"300px"
    }
    let left_stateStyle={
      height:"200px"
    } 
    console.log("App render");

    // let str="btn-sm container label.a BB";
    // console.log(str.split(' ').join(' '));

    return (
        <div className="wrap">
          <div className="header1">
            {/* top menu */}
            <M_topmenu
              onSetLayoutType={this.setLayoutType1}
            >              
            </M_topmenu>
          </div>
          <div className="header2">
            fast button
          </div>

          <div className="content">
            {/* <div className="left" style={leftStyle}>             */}
            <div className={this.state.leftVisible ? "left" : "hidden"}>
              <div className="flex-item">
                list
              </div>

              <div className="flex-item-no" style={left_stateStyle}>
                state
              </div>

            </div>
            <div className="main">
              <div className="osm">
                <M_osmMap></M_osmMap>
              </div>
              {/* <div className="main-grid"> */}
              <div className={this.state.bottomVisible ? "main-grid" : "hidden"}>                
                <M_botGrid></M_botGrid>
              </div>

            </div>             

          </div>

          <div className="footer">
            <LocalTime className="foot_time" time-sm color="info" ></LocalTime>
          </div>

        </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

