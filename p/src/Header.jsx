import React, { useContext, useState } from 'react';
import { Mycontext } from './Context';
import { IoFilterSharp } from "react-icons/io5";



const Header = () => {
    const { addname } = useContext(Mycontext)
    const [suggestions, setSuggestions] = useState([1,2,2,3]);
    const [search, updatesearch] = useState('');

 var value=0;
    const handleSearch = () => {
        addname(search)
        window.open("/","_self")
        
    };


    return (
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
            <button onClick={() => { window.open("/", "_self") }} className="text-2xl font-bold">MovieMania</button>
            <div className="flex items-center">

                <div class="form-floating w-[400px] translate-x-[-400px]">
                    <input class="form-control" id="floatingPassword" placeholder="Password" val={search}
                        onChange={(e) => { updatesearch(e.target.value)
                            value=1;
                         }} />
                    <label for="floatingPassword" className=' text-black'>Search movies...</label>
                </div>

               

                <button
                    type="button"
                    onClick={handleSearch}
                    className="p-2 bg-orange-500 rounded-r-lg hover:bg-orange-600 scale-150 translate-x-[-384px]"
                >
                    Search
                </button>


            </div>
        </header>
    );
};

export default Header;
