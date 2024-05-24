import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { Mycontext } from "./Context"
import Detail from "./ViewDetail"
function Front() {
const{name,changedetail}=useContext(Mycontext)

var x;
const [a,b]=useState([])


if(name===""){x="alien"}
else{x=name}

    
    useEffect(() => {
        
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=70c2a07a&s=${x}`)
            .then((res) => {
               if(Object.values(res).length === 0){
                value=0;
               }
            b(res.data.Search)
            })
    }, [])
   


    return (<>
    {name===""?
    <h1 className="text-3xl m-2 translate-x-10	">Top Movies :</h1>
:<h1 className="text-3xl m-2 translate-x-10">Results For {name} :</h1>

}
    <div className="flex flex-row flex-wrap">
{a.map((i)=>
<div onClick={()=>{
    changedetail(i)
    window.open("/Detail","_self")
}} 
className="max-w-xs bg-gray-800 w-[250px] ml-[50px] mt-[30px] rounded-lg shadow-lg overflow-hidden ">
      <img className="w-full h-[260px]  object-cover" src={i.Poster} ></img>  
      <div className="p-4 flex flex-row gap-20">
        <h3 className="text-xl font-bold text-white mb-2">{i.Title}</h3>
        <h3  className="text-xl font-bold text-white mb-2">{i.Year}</h3>
      </div>
    </div>)}
    </div>
    



    </>)
}
export default Front
