import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/api-users";
import { user } from "@/models/user";

export const useGetUsers = (accessToken:string,options?: UseQueryOptions<user[], Error>) =>
  useQuery({
    queryKey: ["users"],
    queryFn: ()=>getUsers(accessToken),
    ...options,
  });