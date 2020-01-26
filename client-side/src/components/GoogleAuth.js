import React from "react";
import { connect } from "react-redux";
import { signIn, signAsGuest } from "../actions";
import { createGuestUserProfile, createGoogleUserProfile } from "./UserProfile";
import { socket } from "../client_socket";

class GoogleAuth extends React.Component {
  componentDidMount() {
    socket.on("connect", () => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "548027089353-j03e14pvp4o81noalqup4e212iscpqlb.apps.googleusercontent.com",
            scope: "email profile"
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
      const userProfile = createGuestUserProfile(socket.id);
      this.props.signAsGuest(userProfile);
      socket.emit("profileCreated", this.props.userProfile);
    });
  }

  onAuthChange = isSignedIn => {
    let userProfile;
    if (isSignedIn) {
      userProfile = createGoogleUserProfile(
        this.auth.currentUser.get().getBasicProfile()
      );
      this.props.signIn(userProfile);
    } else {
      const userProfile = createGuestUserProfile(
        this.props.userProfile.socketID
      );
      this.props.signAsGuest(userProfile);
    }
    socket.emit("profileCreated", this.props.userProfile);
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.userProfile.isSignedIn === null) {
      return <span>There is some problem with the API</span>;
    } else if (this.props.userProfile.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign in with Google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { userProfile: state.profileReducer };
};
export default connect(mapStateToProps, { signIn, signAsGuest })(GoogleAuth);
