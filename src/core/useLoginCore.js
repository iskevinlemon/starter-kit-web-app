import { auth, googleProvider } from"../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

async function useLoginCore(){
    try {
        await signInWithPopup(auth, googleProvider);
    } 
    catch (err) {
        console.log(err);
    }
}

export default useLoginCore;