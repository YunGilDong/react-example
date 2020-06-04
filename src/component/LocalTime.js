import React, {Component} from 'react';
import {mapToCssModules} from '../utils';
import classNames from 'classnames';
import '../App.css';
import './comp.css';

class LocalTime extends Component
{
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        className: "",
        cssModule: "",
        size: "sm",
        color: "dark",
        tag: 'div',
    }

    state = {
        date: new Date(),
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    getStrDateTime()
    {
        let dt = new Date();
        return (dt.toLocaleDateString() + " " + dt.toLocaleTimeString());
    }

    render(){
        let{
            className,
            cssModule,
            size,
            color,
            tag: Tag
        } = this.props;

        let sz = size ? `time-${size}` : false;
        console.log(sz);

        const timeColor = `time-color-${color}`;
        console.log(timeColor);

        console.log("cls : "+className);

        const classes = mapToCssModules(classNames(
            className,               
            timeColor,   
            size ? `btn-${size}` : false,      
            
          ), cssModule);


        console.log("classname : "+classes);        

        let strDateTime = this.getStrDateTime();
        return (        
        <div className={classes}>{strDateTime}</div>

        // <Tag
        //     type={(Tag === 'div') ? 'div' : undefined}
        //     className={classes}
        // />
        )
    }
}

export default LocalTime;