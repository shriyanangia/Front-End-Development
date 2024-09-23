import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingID) =>
      updateBooking(bookingID, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      /* Data Freshness: When you invalidate a query, it marks the data as stale. 
      This ensures that the next time the data is needed, it will be refetched, keeping your application’s data up-to-date */
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
}
