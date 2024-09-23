import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

//custom hook to fetch data
export function useCabins() {
  //pass in object with - query key(uniquely identify data to query-must be an array) and the query function (function responsible for fetching data from API, needs to return a promise)
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}
