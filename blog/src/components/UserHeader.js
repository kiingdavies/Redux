import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
 
  render() {
      const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => { //mapStateToProps helps use to make some predefined calcs to the redux state before sending it to connect
  
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
