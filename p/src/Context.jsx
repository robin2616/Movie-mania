import { createContext, useState } from "react";
import { useEffect } from "react";

const Mycontext = createContext();

function Movie({ children }) {

    ///Name
    const [name, updatename] = useState(() => {
        const x = localStorage.getItem('name');
        return x ? JSON.parse(x) : "";
      })
    
      function addname(v) {
        updatename(v)
      }
    
      useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
      }, [name]);

//VIEW DETAIL
const [detail, updatedetail] = useState(() => {
    const m = localStorage.getItem('detailofmovie');
    return m ? JSON.parse(m) : {};
  })

  function changedetail(v) {
    updatedetail(v)
  }

  useEffect(() => {
    localStorage.setItem('detailofmovie', JSON.stringify(detail));
  }, [detail]);

return (<>
    <Mycontext.Provider value={{name,addname,detail,changedetail}}>
      {children}
    </Mycontext.Provider>

  </>)
}

export { Movie, Mycontext }