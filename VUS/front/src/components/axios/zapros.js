import { useEffect } from "react";
import axios from "axios";

function GetAxios() {
  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character?page=${page}')
    .then(res => console.log(res.data).catch(err => console.log(err)))
  },[])


  
  return(
   <div></div>
  )
}

export default GetAxios;




// import React, {useEffect } from "react";
// import { useInfiniteQuery } from 'react-query'

// const fetchRepositories = async (page = 1) => {
//   const response = await fetch(
//     'https://rickandmortyapi.com/api/character?page=${page}'
//   );
//   return response.json()
// };

// const Pagination_all = () => {
//   const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
//     "repositories",
//     ({ pageParam = 1 }) => fetchRepositories(pageParam),
//     {
//       getNextPageParam: (lastPage, allPages) => {
//         const maxPages = lastPage.info.count / 20;
//         const nextPage = allPages.length + 1;
//         return nextPage <= maxPages ? nextPage : undefined;
//       },
//     }
//     );

//   useEffect(() => {
//     let fetching = false;
//     const onScroll = async (event) => {
//       const { scrollHeight, scrollTop, clientHeight } =
//         event.target.scrollingElement;

      

//         if (!fetching && scrollHeight - scrollTop <= clientHeight * 1) {
//           fetching = true;
//           if (hasNextPage) await fetchNextPage();
//           fetching = false;
//           console.log('hi');
//         }
//     };

//     document.addEventListener("scroll", onScroll);
//     return () => {
//       document.removeEventListener("scroll", onScroll);
//     };
//   }, []);
//   console.log(data.pages);

//   return (
//     <div className='user__block'>
//         {data.pages.map((pages) =>
//           pages.results.map((info) => (
//       <div className="">
//         <div className="">
//           <div className="" key={info.id}>
//           <img src={info.image} alt="" />
//           <div className="">
//           <div className="">
//           {info.name}
//           </div>
//           <div className="">
//           {info.gender} {info.status}
//           </div>
//           </div>
//           </div>


//       <div className=''>
//       <button className="">Принять</button>
//       <button className="">Отклонить</button>
//       </div>
//       </div>
//       </div>
//       ))
//     )}


//     </div>
//   );
// };


// export default Pagination_all;