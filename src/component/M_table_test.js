import React, {Component, useRef, createRef } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {gridDataGenerator} from './gridData';
import 'react-widgets/dist/css/react-widgets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../App.css';
const products = [
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 102 }
  ];

const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price',
    hidden: true
  }];
  
  class M_table_test extends Component {
    state = { columns }

    static defaultProps = {
        bordered: true,
        headerClasses: "m-grid-font m-grid-header",
        bodyClasses: "m-grid-font",
        bordered: true,
        rowClasses: "m-grid-row",
        headerWrapperClasses: "",        
    }
  
    changeHidden = () => {
      const newColumns = this.state.columns.map((column) => {
        if (column.dataField !== 'price') return column;
        return {
          ...column,
          hidden: !column.hidden
        };
      });
      this.setState({ columns: newColumns });
    }
  
    render() {
      return (
        <div>
          {/* <BootstrapTable keyField="id" data={ products } columns={ this.state.columns } /> */}

          <BootstrapTable className="m-grid" headerClasses={this.props.headerClasses}  bodyClasses={this.props.bodyClasses} rowClasses={this.props.rowClasses}
              id="grid1" keyField='id' scrollTop={'Top'}  
              data={ products } columns={this.state.columns}
              style={{padding:0}}
              />

          <button onClick={ this.changeHidden }>change price column visibility</button>
        </div>
      );
    }
  }

  export default M_table_test;