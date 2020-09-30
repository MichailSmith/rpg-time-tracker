import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { OAUTH_EMAIL, OAUTH_TOKEN } from "../constants";

type NavBarProps = {
  signedIn: Boolean;
  onSignedInChange: (newSignIn: boolean) => void;
};

const saveUserData = (email: string, token: string): void => {
  localStorage.setItem(OAUTH_EMAIL, email);
  localStorage.setItem(OAUTH_TOKEN, token);
};

const deleteUserData = (): void => {
  localStorage.setItem(OAUTH_EMAIL, "oauth-email");
  localStorage.setItem(OAUTH_TOKEN, "oauth-token");
};

export const NavBar = ({ onSignedInChange, signedIn }: NavBarProps) => {
  const responseGoogle = (response: any) => {
    if (response.profileObj) {
      saveUserData(String(response.profileObj.email), String(response.tokenId));
      onSignedInChange(true);
      console.log(
        "Welcome " +
          response.profileObj.email +
          ". Your OAuth token is " +
          response.tokenId
      );
    } else console.log("Offline login not supported");
  };

  const logout = () => {
    deleteUserData();
    onSignedInChange(false);
    console.log("Logout successful");
  };

  return (
    <ul className="Nav-Bar">
      <li className="Nav-Title">RPG Time Tracker</li>
      {/* <li className="Nav-Item">Campaign</li> */}
      {/* <li className="Nav-Item">Login</li> */}
      {signedIn ? (
        <>
          <li className="Nav-Item">
            Welcome {localStorage.getItem(OAUTH_EMAIL)}
          </li>
          <li>
            <GoogleLogout
              clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          </li>
        </>
      ) : (
        <li>
          <GoogleLogin
            clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          ></GoogleLogin>
        </li>
      )}
    </ul>
  );
};
