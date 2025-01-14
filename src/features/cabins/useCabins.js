import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apicabins";

function useCabins() {

    const {isLoading,data:cabins,error,}=  useQuery({
        queryKey:['cabins'],
        queryFn:  getCabins,
      })
    return (
       {isLoading ,cabins}
    )
}

export default useCabins;