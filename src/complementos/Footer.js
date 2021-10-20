import React from "react";
import '../App.css'
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                {this.props.textofoo}
            </div>
        );
    }
}


export default Footer;

Footer.propTypes = {
    textofoo: PropTypes.object
  
};