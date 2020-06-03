import React, {useState, Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Button} from 'reactstrap';
import '../App.css';

class M_topmenu extends Component
{       
    state={
        isDropdownOpen1: false,
        isDropdownOpen2: false        
    }

    setDropdownOpen=()=>{
        const{isDropdownOpen1} = this.state;
        this.setState({isDropdownOpen1: !isDropdownOpen1});        
    }
    setDropdownOpen2=()=>{
        const{isDropdownOpen2} = this.state;
        this.setState({isDropdownOpen2: !isDropdownOpen2});        
    }

    // um.... nothing...
    setDropdownOpen9=(e)=>{        
        const{name, value} = e.target;
        console.log(e.target);
        console.log("setDropdownOpen1 "+name+", "+value+" ##");
        console.log(value);
        this.setState({
            [value]: !value
        })
    }

    handleSubmit = (e) => {
        console.log("handleSubmit");
        e.preventDefault();        
        this.props.onSetLayoutType(2);
    }

    handleTestBtn = (e) => {
        e.preventDefault();        
        this.props.onSetLayoutType(e.target.value);
    }

    render(){        
    // param1 : state, param2 : state function
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => setDropdownOpen(!isDropdownOpen);
    return(        
        <div className="wrap-row">
            <Dropdown className="dropdown_" isOpen={this.state.isDropdownOpen1} name="menu1" value={this.state.isDropdownOpen1} toggle={this.setDropdownOpen} >
                <DropdownToggle caret className="dropdown-toggle_">
                    menu1
                </DropdownToggle>
                <DropdownMenu className="font-sm"> 
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown className="dropdown_" isOpen={this.state.isDropdownOpen2} toggle={this.setDropdownOpen2} name="menu2" value={this.state.isDropdownOpen2}>
                <DropdownToggle caret className="dropdown-toggle_">
                    menu2
                </DropdownToggle>
                <DropdownMenu className="font-sm"> 
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Test button group */}
            
            <div className="test-btn-div">
                <form onSubmit={this.handleSubmit}>
                <Button className="test-btn" color="secondary" size="sm" value="1" onClick={this.handleTestBtn}> layout1 </Button>
                <Button className="test-btn" color="secondary" size="sm" value="2" onClick={this.handleTestBtn}> layout2 </Button>
                <Button className="test-btn" color="secondary" size="sm" value="3" onClick={this.handleTestBtn}> layout3 </Button>
                </form>
            </div>
            
        </div>
        
        )
    }
}

export default M_topmenu;