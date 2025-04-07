import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/api";
import logoImage from "../../../src/assets/images/prod1.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //make a usestate for each input
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // make a error state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let isValid = true;
    //validating the first name
    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("password is required");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!validate()) {
      return;
    }
    // toast.success('login success')
    // make a json object
    const data = {
      email: email,
      password: password,
    };
    // make a api request
    loginUserApi(data).then((res) => {
      //recived data: success message
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        console.log(res.data.message);
        console.log(res.data);

        if (res.data.userData.isAdmin == true) {
          navigate("/admin");
          toast.success("Logged In as Admin");
        } else {
          navigate("/");
          toast.success(res.data.message);
        }

        // success -bool, message-text, token-text, user data
        // setting token and user data in local storage
        localStorage.setItem("token", res.data.token);

        // setting user data
        const convertedData = JSON.stringify(res.data.userData);

        //local storage set
        localStorage.setItem("userData", convertedData);
      }
    });
  };

  const images = [
    {
      src: "data:image/jpeg;base64,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",
      heading: "Technical Supplies",
      text: "Find your preferred supplies anytime, anywhere with ease ",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className=' mt-2 '>
        <div className='login-container'>
          <div className='login-content'>
            <div className='login-left'>
              <div className='carousel'>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index}`}
                      className='login-image'
                    />
                    <div className='carousel-caption bg-white'>
                      <h3 className='text-black'>{image.heading}</h3>
                      <p className='text-black'>{image.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='login-right'>
              <div className='login-form'>
                <h2>Welcome Back!</h2>
                <p>Please enter your details</p>
                <form>
                  <label>Email Address</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email Address'
                    required
                  />
                  {emailError && <p className='text-danger'>{emailError}</p>}

                  <label>Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                    required
                  />
                  {passwordError && (
                    <p className='text-danger'>{passwordError}</p>
                  )}

                  <div className='login-options'>
                    <div>
                      <input type='checkbox' id='remember' />
                      <span className='ms-2'>Remember me </span>
                    </div>
                    <a href='/forgot_password' style={{ color: "blue" }}>
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type='submit'
                    className='btn btn-dark w-100'
                  >
                    Login
                  </button>
                </form>
                <p className='terms'>
                  By creating an account, you agree to our{" "}
                  <a href='/terms' className='text-black'>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href='/privacy' className='text-black'>
                    Privacy Policy
                  </a>
                  .
                </p>
                <p>
                  Don't have an account?{" "}
                  <a style={{ color: "blue" }} href='/register'>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
