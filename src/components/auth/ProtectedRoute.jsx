import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory } from  "react-router-dom/cjs/react-router-dom.min";
import isEmailCompanyDomain from "../../utils/isEmailCompanyDomain";

const ProtectedRoute = ({component: Component}) => {

    const location = useHistory();
    const authentication = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      onAuthStateChanged(authentication, (user) => {
      
        if (user) {

            var emailIsCompanyDomain = isEmailCompanyDomain(auth?.currentUser?.email);

            if(emailIsCompanyDomain){
                setIsLoggedIn(true);
            }

            else{
                signOut(auth);
                setIsLoggedIn(false);
            }

        } 
        
        else {
          setIsLoggedIn(false);
          location.push("/?error=emailUnauthorised");
        }
    
      });
    },[]);

    return (
      <>
        {isLoggedIn && (
          <Component />
        )}
      </>
    );
}
 
export default ProtectedRoute;