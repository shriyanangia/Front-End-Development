import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

//custom hook to fetch data
export function useBooking() {
  const { bookingID } = useParams();

  //pass in object with - query key(uniquely identify data to query-must be an array) and the query function (function responsible for fetching data from API, needs to return a promise)
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingID],
    queryFn: () => getBooking(bookingID),
    retry: false,
  });

  return { isLoading, error, booking };
}
