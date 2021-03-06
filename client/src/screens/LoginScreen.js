import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://fordraptor.us/wp-content/uploads/2021/03/Shop-2.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      {/* loginScreen_body started here */}
      <div className="loginScreen_body">
        {/* agar sign in ka button dabaya hai to sign ka moduule load otherwise fragment wala section call rhy */}
        {signIn ? (
          <SignInScreen />
        ) : (
          // q k body k ander bohot zyada chezen use krni hain is liye fragment istimal karen gy
          // fragment started here
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel at any time </h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            {/* form started here */}
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStartedbutton"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
          /* fragment end here */
        )}
      </div>
      {/* loginScreen_body end here */}
    </div>
  );
}

export default LoginScreen;
