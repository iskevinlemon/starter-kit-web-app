import { auth } from"../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import useLoginCore from "../../core/useLoginCore";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const queryParam = new URLSearchParams(window.location.search);
    const errorMessage = queryParam.get("error");

    const location = useHistory();
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                location.push("/dashboard");
            } 
        });
        
        if(errorMessage != null){

            if(errorMessage == "emailUnauthorised"){
                location.push("/");
                toast.error("Fail to login\nYour email is not authorised to access this application",
                {
                    duration: 5000
                }
                );
            }
        }

    },[]);

    return (
        <>
        <Toaster/>

            <div className="row vh-100">
                <div className="col-lg-6 bg-theme order-lg-0 order-1 login-col-1">
                    <img src="/assets/imgs/login1.svg" className="mt-20vh" alt="Login" />
                </div>

                <div className="col-lg-6 login-col-2 p-5">
                    <h1 className="font-weight-bold mt-20vh">Starter Kit</h1>
                    <h5>Welcome to Starter Kit</h5>
                    <p className="mt-5 text-secondary">Sign in with your organisation email or whitelisted email</p>
                    
                    <button className="btn bg-theme text-white"
                        onClick={useLoginCore}
                    >
                        <i className="far fa-envelope mr-2"></i>
                        Continue with Single Sign On
                    </button>

                    <a className="ml-3">
                        <i className="far fa-circle-question mr-2"></i>
                        Get help
                    </a>

                </div>
            </div>
        </>
    );
}
 
export default Login;