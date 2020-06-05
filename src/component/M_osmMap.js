import React, {Component} from 'react';
import '../App.css';

class M_osmMap extends Component
{
    render(){
        return(
            <div id="map">
                <script src="./geojson.js"></script>
	            <script src="./osmmap.js"></script>
            </div>
        )
    }
}

export default M_osmMap;