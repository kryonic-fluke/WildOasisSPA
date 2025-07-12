import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
   const {mutate:signUp,isLoading}     =useMutation({
    mutationFn:signUpAPi,
        onSuccess: (user)=>{
            toast.success("Account successfully created please verify the new account from the user's email address")
            
        }

   })


   return {signUp,isLoading}
}

export default useSignUp;