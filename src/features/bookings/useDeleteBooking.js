import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking  as deleteBookingApi} from "../../services/apiBookings";
 export function useDeleteBooking() {
    
     const queryClient = useQueryClient();
     const { isLoading: isDeleting, mutate:deleteBooking} = useMutation({
       mutationFn: deleteBookingApi, //function that deletes the cabin , and returns a promise
       onSuccess: () => {
         toast.success("successfully deleted!!");
         queryClient.invalidateQueries({
           queryKey: ["bookings"], //this will re fetch the data , to update ui on deletion   //invalidating the cache as soon as the mutation is done, using onSuccs(can define what happens after sucessful mutation)

         });
       },
     
       onError: (error) => toast.error(error.message),
     }); 

     return {isDeleting,deleteBooking}   //exporting isloading and mutate
}

export default useDeleteBooking;
