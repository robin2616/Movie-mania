import { useContext } from "react";
import { Mycontext } from "./Context";

const Detail=()=> {
    const{detail}=useContext(Mycontext)
  return (
    <div className=" bg-gray-800 h-[410px] w-[1000px] translate-x-[100px]  flex flex-row text-white rounded-lg shadow-lg overflow-hidden m-4">
      <img className="object-cover translate-x-5 h-[400px] p-8" src={detail.Poster} />
      <div className="p-6 translate-x-10">
        <h3 className="text-2xl font-bold mb-2"></h3>
        <p className="text-white text-xl font-semibold">Title : {detail.Title} </p>
        <p className="text-white text-xl font-semibold">Year : {detail.Year} </p>
        <p className="text-white text-xl font-semibold">Type: {detail.Type}</p>
        <p className="text-white text-xl font-semibold">imdbID: {detail.imdbID}</p>
      </div>
    </div>
    
  );
};
export default Detail;
