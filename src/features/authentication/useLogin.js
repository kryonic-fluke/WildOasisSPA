import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
 const {mutate:login,isLoading} = useMutation({
    mutationFn:({email,password})=>loginApi({
         email,password
    }),
    onSuccess:(user)=>{
        queryClient.setQueryData(['users'],user.user)  //manually setting cache , when the user logged in
            navigate('/dashboard',{replace:true});
            console.log(user);
            
            
    },
  
    onError:err=>{
        console.log('ERROR',err);
        toast.error("Provider email or password are incorrect");
    }

   });


   return {login,isLoading};
}

export default useLogin;