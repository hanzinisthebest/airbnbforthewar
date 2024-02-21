import { useMutation } from "react-query";
import { fetchAssets, fetchAssetById,fetchAssetByOwenrId, addAsset } from "../../api/api-assets";
import {Asset, AssetToAdd} from "../../models/assets";
import {
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export const useGetAssets = (city: string | null, guests: number | null, options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
    queryKey: ["assets", { city, guests }], // include city and guests in the query key
    queryFn: () => fetchAssets(city, guests),
    ...options,
  });
  export const useGetAssetsByOwnerId =  (ownerId:string,axiosPrivate:AxiosInstance,options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
   queryKey: ["assets",ownerId],
   queryFn: ()=>fetchAssetByOwenrId(ownerId,axiosPrivate),
   ...options,
 });
  export const useGetAssetsById =  (id:string,options?: UseQueryOptions<Asset, Error>) =>
   useQuery({
    queryKey: ["assets",id],
    queryFn: ()=>fetchAssetById(id),
    ...options,
  });
  
  // export const useCreateAsset = (asset:AssetToAdd,accessToken:string,options?: UseQueryOptions<AssetToAdd, Error>)=>
  // useMutation({
  //   mutationFn:()=> addAsset(asset,accessToken),
  //   onError: (error) => {
  //     console.log("An error occurred: ", error);
  //   },
  //   ...options,
  // })