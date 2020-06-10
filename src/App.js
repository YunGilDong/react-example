import React, { Component } from 'react';
import M_topmenu from './component/M_topmenu';
import M_botGrid from './component/M_botGrid';
import LocalTime from './component/LocalTime';
import M_osmMap from './component/M_osmMap';
import M_combo from './component/M_combo';
import M_table_test from './component/M_table_test';
import 'bootstrap/dist/css/bootstrap.css';
import SplitPane, { Pane } from 'react-split-pane';
import './App.css';
import './react_split.css';
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
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);

    this.gridRef = React.createRef();        
  }  

  state = {
    layoutType: 1,
    leftVisible: true,
    bottomVisible: true,
    splitPaneRate: undefined,
    dragging: false,
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    //console.log("shouldComponentUpdate");
    const{layoutType} = this.state;
    if(layoutType === nextState.layoutType)
    {
      return (true);
    }
    else{
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

  handleDragStart() {
    const dragging = this.state.dragging;
    this.setState({ dragging: true });
  }

  handleDragEnd() {    
    const {dragging, splitPaneRate} = this.state;
    this.setState({
      dragging: false,
    });
    setTimeout(() => {
      this.setState({ splitPaneRate: undefined });
    }, 0);

  }

  handleDrag(width) {
    console.log(width);
    const splitPaneRate = this.state.splitPaneRate;
    // if (width >= 300 && width <= 400) {
    //   this.setState({ splitPaneRate: 300 });
    // } else if (width > 400 && width <= 500) {
    //   this.setState({ splitPaneRate: 500 });
    // } else {
    //   this.setState({ splitPaneRate: undefined });
    // }

    
    //console.log(`sp width : ${this.state.splitPaneRate}`);

    console.log(`ref wd : ${this.gridRef.current.clientWidth}`)
    console.log(`window wd : ${window.innerWidth}`);
    let gridPanRate = this.gridRef.current.clientWidth / window.innerWidth;
    this.setState({ splitPaneRate: gridPanRate });    
    console.log(`rate : ${gridPanRate}`);
  }

  render(){
    let leftStyle={
      height:"100%",
      width:"300px"
    }
    let left_stateStyle={
      height:"200px"
    } 
    let splitPanStyle = {
      position: "static"
    }
    console.log("App render");

    // let str="btn-sm container label.a BB";
    // console.log(str.split(' ').join(' '));

    //let gridWidth = document.getElementById('grid').clientWidth;

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

              <SplitPane split="vertical" minSize={300} maxSize={1000} defaultSize={300}
                onChange={this.handleDrag}
                onDragStarted={this.handleDragStart}
                onDragFinished={this.handleDragEnd}
                style={splitPanStyle}>

                <div className={this.state.leftVisible ? "left" : "hidden"}>
                  <div className="flex-item">
                    list
                    <M_combo />
                  </div>

                  <div className="flex-item-no" style={left_stateStyle}>
                    state
                  </div>
                </div>                        
                
                <div className="main">
                  <div className="osm">
                    <M_osmMap></M_osmMap>
                  </div>
                  
                  <div id="grid" className={this.state.bottomVisible ? "main-grid" : "hidden"} ref={this.gridRef}>
                    {/* <M_botGrid
                      splitPaneRate={this.state.splitPaneRate}
                    >                  
                    </M_botGrid> */}
                    <M_table_test></M_table_test>
                  </div>
                </div>                  

              </SplitPane>


              
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

