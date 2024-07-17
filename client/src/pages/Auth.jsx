import React, { useRef } from 'react';
import * as Components from '../components/Components';
import { useNavigate } from 'react-router-dom';
// import Logo from "../../img/logo.png";
import { logIn, signUp } from "../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";

function Auth() {

    // const initialState = {
    //     firstname: "",
    //     lastname: "",
    //     username: "",
    //     password: "",
    //     confirmpass: "",
    // };
    // const loading = useSelector((state) => state.authReducer.loading);
    const navigate = useNavigate();
    // const [isSignUp, setIsSignUp] = useState(false);

    // const [data, setData] = useState(initialState);

    // const [confirmPass, setConfirmPass] = useState(true);

    const dispatch = useDispatch()

    // Reset Form
    // const resetForm = () => {
    //     setData(initialState);
    //     setConfirmPass(confirmPass);
    // };

    // // handle Change in input
    // const handleChange = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    // // Form Submission
    // const handleSubmit = (e) => {
    //     setConfirmPass(true);
    //     e.preventDefault();
    //     if (isSignUp) {
    //         data.password === data.confirmpass
    //             ? dispatch(signUp(data, navigate))
    //             : setConfirmPass(false);
    //     } else {
    //         dispatch(logIn(data, navigate));
    //     }
    // };

    const [signIn, toggle] = React.useState(true);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    // 
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();


    const handleSignup = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = signUpEmailRef.current.value;
        const password = signUpPasswordRef.current.value;
        console.log("Sign Up", { name, email, password });
        toggle(false)
        dispatch(signUp({ firstname: "tester", lastname: 'man', username: email, password: password }, navigate))
    };

    const handleSignin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(logIn({ username: email, password: password }, navigate));
        console.log("Sign In", { email, password });
        // navigate('/');
        // Add your sign-in logic here
    };

    return (
        <div className='h-screen w-screen grid place-content-center'>
            <Components.Container>
                <Components.SignUpContainer signIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' ref={nameRef} />
                        <Components.Input type='email' placeholder='Email' ref={signUpEmailRef} />
                        <Components.Input type='password' placeholder='Password' ref={signUpPasswordRef} />
                        <Components.Button onClick={handleSignup}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={emailRef.value} ref={emailRef} />
                        <Components.Input type='password' placeholder='Password' value={passwordRef.value} ref={passwordRef} />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleSignin}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signIn={signIn}>
                    <Components.Overlay signIn={signIn}>
                        <Components.LeftOverlayPanel signIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
}

export default Auth;
