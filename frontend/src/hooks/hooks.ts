// import axios from "axios";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import Asset from "../models/assets";

// // export interface Product {
// //   id: number;
// //   title: string;
// //   price: number;
// //   images: string[];
// // }

// interface FetchResponse {
//   products: Asset[];
//   skip: number;
// }

// const PAGE_SIZE = 30;

// const useProducts = () =>
//   useInfiniteQuery({
//     queryKey: ["assets"],
//     queryFn: ({ pageParam = 1 }) =>
//       axios.get<FetchResponse>("http://localhost:4000/api/assets", {
//           params: {
//             skip: (pageParam - 1) * PAGE_SIZE,
//           },
//         })
//         .then((res) => res.data),
//     getNextPageParam: (lastPage, allPages) =>
//       lastPage.length === 0 ? undefined : allPages.length + 1,
//   });

// export default useProducts;