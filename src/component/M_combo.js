import React, {Component} from 'react';
import { Combobox, DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

import '../App.css';

class M_combo extends Component
{
    render(){
        let comboDt = ["A", "B", "C"];
        return(

            <Combobox
                data={comboDt}
                defaultValue="---"
            />
        )
    }
}

export default M_combo;