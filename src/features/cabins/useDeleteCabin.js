import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { default as deleteCabinApi } from "../../services/apicabins";
 export function useDeleteCabin() {
    
     const queryClient = useQueryClient();
     const { isLoading: isDeleting, mutate:deleteCabin} = useMutation({
       mutationFn: deleteCabinApi, //function that deletes the cabin , and returns a promise
       onSuccess: () => {
         toast.success("successfully deleted!!");
         queryClient.invalidateQueries({
           queryKey: ["cabins"], //this will re fetch the data , to update ui on deletion   //invalidating the cache as soon as the mutation is done, using onSuccs(can define what happens after sucessful mutation)

         });
       },
     
       onError: (error) => toast.error(error.message),
     }); 

     return {isDeleting,deleteCabin}   //exporting isloading and mutate
}

export default useDeleteCabin;
