import React, {Component, useRef, createRef } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {gridDataGenerator} from './gridData';
import 'react-widgets/dist/css/react-widgets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../App.css';
const products = [
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 101 },
    { id: 3, name: "Item 3", price: 102 }
  ];

const columns = [{
    dataField: 'id',
    text: 'Product ID',
    hidden: false
  }, {
    dataField: 'name',
    text: 'Product Name',
    hidden: false
  }, {
    dataField: 'price',
    text: 'Product Price',
    hidden: false
  }, {
    dataField: 'hidden',
    text: 'hidden',
    hidden: true
  }
];
  
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
      console.log('changeHidden');
      const {columns} = this.state.columns;
      const newColumns = this.state.columns.map((column) => {
        if (column.dataField !== 'price') return column;
        return {
          ...column,
          hidden: !column.hidden
        };
      });
      this.setState({ columns: newColumns });
    }

    columnToggle = () => {
      console.log("columnToogle");      
    }

    setColumnVisible = (col, visible) => {
      const {columns} = this.state.columns;
      const newColumns = this.state.columns.map((column) => {
        return column;
      });
      
      newColumns[col]['hidden'] = visible;      
      this.setState({ columns: newColumns });

      console.log(columns);
    }

    componentWillReceiveProps(nextProps) {
      // this.props 는 아직 바뀌지 않은 상태
      
      // console.log(`prev props: ${this.props.gridPaneRate}`);
      // console.log(`next props: ${nextProps.gridPaneRate}`);

      if(nextProps.gridPaneRate===undefined)  return;

      let gridPanRate = nextProps.gridPaneRate*100;
      if(gridPanRate < 60)
      {
        // 3 col unvisible
        this.setColumnVisible(2, true);
      }
      else if(gridPanRate < 70)
      {
        this.setColumnVisible(1, true);
        this.setColumnVisible(2, false);
      }
      else
      {
        this.setColumnVisible(1, false);
        this.setColumnVisible(2, false);
      }
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