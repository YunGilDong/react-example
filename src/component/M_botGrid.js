import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import {gridDataGenerator} from './gridData';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../App.css';


//const data01 = gridDataGenerator();

const data01 = [
    { id: 1, name: "Item 1", field1: 100 },
    { id: 2, name: "Item 2", field1: 102 }
  ];

const columns = [{
    dataField: 'id',  
    text: 'Group ID'  
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
    text: 'field10'  
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
    static defaultProps = {
        bordered: true,
        headerClasses: "m-grid-font m-grid-header",
        bodyClasses: "m-grid-font",
        bordered: true,
        rowClasses: "m-grid-font m-grid-body",
        headerWrapperClasses: "m-grid-font m-grid-header"

    }

    render(){
        const {
            headerClasses,
            bodyClasses,
            bordered,
            rowClasses,
            headerWrapperClasses
        } = this.props;

        console.log(data01);
        return(
            // <BootstrapTable headerClasses={headerClasses} bodyClasses={bodyClasses} bordered={bordered} rowClasses={rowClasses} id="grid1" keyField='id' scrollTop={'Top'}  data={ data01 } columns={ columns }/>        
            <BootstrapTable classes={headerClasses} headerClasses={headerClasses} headerWrapperClasses={headerWrapperClasses} bodyClasses={bodyClasses} rowClasses={rowClasses} id="grid1" keyField='id' scrollTop={'Top'}  data={ data01 } columns={ columns }/>        
        )
    }
}

export default M_botGrid;