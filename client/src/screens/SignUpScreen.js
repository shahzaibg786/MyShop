import React from "react";
import "./SignUpScreen.css";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

function SignUpScreen() {
  //   const [showPassword, setshowPassword] = useState(false);
  //   const [isSignup, setisSignup] = useState(false);
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  //   const [formData, setformData] = useState(initialState);

  // handling show password
  //   const handleShowPassword = () =>
  //     setshowPassword((prevShowpassword) => !prevShowpassword);

  //   //switching from already have account to sign up
  //   const switchMode = () => {
  //     setisSignup((previsSignup) => !previsSignup);
  //     // handleShowPassword(false);
  //     setshowPassword(false);
  //   };

  return (
    <div className="signupScreen">
      <form>
        <h1>SignUp</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <h4>
          <span className="signUpScreen_gray">Already have an account?</span>
          <span className="signUpScreen_link">Login now</span>
          {/* <button onClick={switchMode}>
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button> */}
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
