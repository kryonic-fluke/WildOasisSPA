import { useQuery } from "@tanstack/react-query";
import {  getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
const [searchParams] =useSearchParams();

const filterValue =searchParams.get('status');

const filter = !filterValue||filterValue ==='all' ?null:
{field:'status',value:filterValue }; 

// {field:'totalPrice',value:5000,method:'gte'}


//SORT

const sortByRaw = searchParams.get('sort-by')||'startDate-desc';

//Pagination
 const page = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

const [field,direction] =sortByRaw.split('-');

const sortBy = {field,direction};


    const {isLoading,data}=  useQuery({
       queryKey: ['bookings',filter,sortBy,page],
        queryFn:  ()=>getBookings({filter,sortBy,page}),
      })
    return (
      { isLoading, bookings: data?.data, count: data?.count }
    )
}

export default useBookings;