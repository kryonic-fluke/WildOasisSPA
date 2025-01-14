import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apicabins";
import toast from "react-hot-toast";

function useCreateCabin() {
    const queryClient = useQueryClient(); // Use this instead of new QueryClient()

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
          toast.success("New cabin has been successfully created");
          queryClient.invalidateQueries({ queryKey: ['cabins'] })

        },
    
        onError: (err) => toast.error(err.message),
      });

      return {isCreating,createCabin}
}

export default useCreateCabin;