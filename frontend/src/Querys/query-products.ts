import { fetchAssets, fetchAssetById } from "../api/api-assets";
import Asset from "../models/assets";
import {
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useGetProducts = (options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    ...options,
  });
  export const useGetProductById = (id:string,options?: UseQueryOptions<Asset, Error>) =>
  useQuery({
    queryKey: ["assets",id],
    queryFn: ()=>fetchAssetById(id),
    ...options,
  });