import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as UpdateSettingApi} from "../../services/apiSettings";

function useUpdateSetting() {
const queryClient = useQueryClient();
    const { mutate: UpdateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: UpdateSettingApi,
        onSuccess: () => {
          toast.success("Settings has been successfully edited");
          queryClient.invalidateQueries({
            queryKey: ["settings"],
          });
    
        },
    
        onError: (err) => toast.error(err.message),
      });
    return {isUpdating,UpdateSetting} 
}

export default useUpdateSetting;