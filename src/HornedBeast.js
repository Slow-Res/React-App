
import React, { Component }  from 'react';
class HornedBeast extends Component       {
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.link} alt={this.props.alt} title={this.props.title}/>                
                <p>{this.props.desc}</p>
            </div>
        );
    
    
            
    
            
    }
    
    }
    export default HornedBeast;