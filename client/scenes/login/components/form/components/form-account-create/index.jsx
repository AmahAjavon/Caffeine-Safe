// Import dependencies.
import React from 'react';

// Import scene styles.
import FormAccountCreateStyles from './styles.scss';

class FormAccountCreate extends React.Component{
  render(){
    return(
      <div>
        <div className="account-creation">
          <p>Not with us yet? <a onClick={this.props.toggleLoginView} href="#">Create an account</a></p>
        </div>
      </div>
    );
  }
}

export default FormAccountCreate;
