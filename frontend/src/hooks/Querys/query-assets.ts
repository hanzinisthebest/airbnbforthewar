import { useMutation } from "react-query";
import { fetchAssets, fetchAssetById,fetchAssetByOwenrId, addAsset } from "../../api/api-assets";
import {Asset, AssetToAdd} from "../../models/assets";
import {
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useGetAssets = (options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    ...options,
  });
  
  export const useGetAssetsByOwnerId =  (ownerId:string,accessToken:string,options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
   queryKey: ["assets",ownerId],
   queryFn: ()=>fetchAssetByOwenrId(ownerId,accessToken),
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