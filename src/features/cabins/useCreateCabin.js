import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created.");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      /*  reset() function is coming from react hook form library which we do not have here 
      reset(); */
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}
