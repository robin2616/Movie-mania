import { useContext } from "react"
import { Mycontext } from "./Context"

function Detail(){
    const{detail}=useContext(Mycontext)
    console.log(detail)
    return(<>
    <h1>{detail.Year}</h1>
       
    </>)
}
export default Detail