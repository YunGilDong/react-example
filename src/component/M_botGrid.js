import React, {Component, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import {gridDataGenerator} from './gridData';
import Combobox from 'react-widgets/lib/Combobox';
import 'react-widgets/dist/css/react-widgets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../App.css';

let data01 = gridDataGenerator();

function columnFormatter(cell, row, rowIndex, formatExtraData)
{
    //console.log(row);
    let comboArr = new Array();

    Object.keys(row).forEach(function(key){
      //console.log(row[key]);
      comboArr.push(row[key]);
    });

    //console.log(comboArr);

    return (
      <Combobox
        data={comboArr}
        defaultValue="---"
      />
    )   
}

// const data01 = [
//     { id: 1, name: "Item 1", field1: 100 },
//     { id: 2, name: "Item 2", field1: 102 }
//   ];

const columns = [{
    dataField: 'id',  
    text: 'Group ID',
    headerStyle: (colum, colIndex) => {
      return { width: '70px', textAlign: 'center' };
    }

    
  }, {  
    dataField: 'name',  
    text: 'Group Name'  
  }, {  
    dataField: 'field1',  
    text: 'field1'  
  }, {  
    dataField: 'field2',  
    text: 'field2'  
  }, {  
    dataField: 'field3',  
    text: 'field3'  
  }, {  
    dataField: 'field4',  
    text: 'field4'  
  }, {  
    dataField: 'field5',  
    text: 'field5'  
  }, {  
    dataField: 'field6',  
    text: 'field6'  
  }, {  
    dataField: 'field7',  
    text: 'field7'  
  }, {  
    dataField: 'field8',  
    text: 'field8'  
  }, {  
    dataField: 'field9',  
    text: 'field9'  
  }, {  
    dataField: 'field10',  
    text: 'field10',
    hidden: false,
  }
  , {  
     dataField: 'field11',  
    text: 'field11',
    formatter: columnFormatter
    // formatExtraData: {
    // dt: data01
    // }
  },
  {
    dataField: 'field12',
    text: 'field12',
    formatter: (cellContent, row) => {
      let comboArr = new Array();
      Object.keys(row).forEach(function(key){
        comboArr.push(row[key]);
      });
      return (
        <Combobox
          data={comboArr}
          defaultValue="---"
        />
      );
    }
  }
];

// M_botGrid.propTypes = {
//     headerClasses: PropTypes.string,
//     bodyClasses: PropTypes.string,    
//     bordered: PropTypes.bool,
//     rowClasses: PropTypes.string    
// };

// M_botGrid.defaultProps = {
//     bordered: true,
// };


class M_botGrid extends Component
{
    
    constructor(props)
    {
        super(props);      
        this.setColumnOption = this.setColumnOption.bind(this);        
    }   

    static defaultProps = {
        bordered: true,
        headerClasses: "m-grid-font m-grid-header",
        bodyClasses: "m-grid-font",
        bordered: true,
        rowClasses: "m-grid-row",
        headerWrapperClasses: "",        
    }

    state = {
        widthRate: 100.0,
        columns,
    }

    // componentDidMount () {
    //     // const { clientWidth, clientHeight } = this.ref.current
    //     // console.log('ref wd : ');
    //     // console.log(this.ref.current)
    //     // console.log(clientWidth, clientHeight)
    // }

    shouldComponentUpdate(nextProps, nextState)
    {
        const {
          headerClasses,
          bodyClasses,
          bordered,
          rowClasses,
          headerWrapperClasses,
          splitPaneRate,
      } = nextProps;

      const {widthRate} = this.state.widthRate;
      console.log(`shouldComponentUpdate ${splitPaneRate}`);
      if (typeof splitPaneRate !== 'undefined')
      {
          

          let wd = splitPaneRate*100;

          console.log(`shouldComponentUpdate(IN) ${wd}`);

          console.log(columns);

          columns[11]['hidden'] = (wd < 80)?true:false;
          console.log(columns[11]['hidden']);
          console.log(columns);

          // this.setState({widthRate: wd});

          //this.changeHidden();
          return true;
      }
      else
        return true;

      
    }

    gridColumnControl()
    {

    }

    setColumnOption(wd)
    {
        console.log(`setColumnOption : ${wd} , ${this.state.widthRate}`);

        const {widthRate} = this.state.widthRate;
        //this.setState({widthRate: wd});
        
        columns[11]['hidden'] = (wd < 80)?true:false;
        columns[11]['dataField'] = 'GGGGG';
        console.log(columns[11]['hidden']);
    }

    changeHidden = () => {
      console.log('changeHidden');
      //const {columns} = this.state.columns;
      // const newColumns = this.state.columns.map((column) => {
      //   if (column.dataField !== 'field10') 
      //   {
            
      //       return column;
      //   }
        
      //   return {          
      //     ...column,
      //     hidden: true
      //   };
      // });

      const newColumns = this.state.columns.map((column) => {            
            return column;        
      });

      newColumns[11]['hidden'] = !this.state.columns[11]['hidden'];

      this.setState({ columns: newColumns });
      console.log(columns);
    }

    render(){
        const {
            headerClasses,
            bodyClasses,
            bordered,
            rowClasses,
            headerWrapperClasses,
            splitPaneRate,
        } = this.props;
        
        console.log('grid render');
        console.log(`pan width : ${splitPaneRate}`);
        console.log(columns[11]['hidden']);
        //let widthRate = splitPaneRate*100;
        
        
        //this.setColumnOption(widthRate);
        let colObj = columns;
        console.log(this.state.columns);
        return(
            
            
            //<BootstrapTable headerClasses={headerClasses} bodyClasses={bodyClasses} bordered={bordered} rowClasses={rowClasses} id="grid1" keyField='id' scrollTop={'Top'}  data={ data01 } columns={ columns }/>

            <div>

            <BootstrapTable className="m-grid" headerClasses={headerClasses}  bodyClasses={bodyClasses} rowClasses={rowClasses}
              id="grid1" keyField='id' scrollTop={'Top'}  
              data={ data01 } columns={ this.state.columns }
              style={{padding:0}}
              />

            <button onClick={this.changeHidden}>button</button>
            </div>
            
        )
    }
}

export default M_botGrid;