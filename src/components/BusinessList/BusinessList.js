import React from 'react';
import './BusinessList.css'
import {Business} from '../Business/Business'



export class BusinessList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return(<div className="BusinessList">
        {this.props.businesses.map((obj,i) => {
            return <Business key={obj.id} business={obj}/>;
        })}
      </div>);
    }
}
