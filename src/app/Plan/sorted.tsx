'use client' 
 
import { IoMdArrowDropdown } from "react-icons/io"; 
 
interface SortedByProps{ 
    sort: string 
    setSort: React.Dispatch<React.SetStateAction<string>>;} 
 
const SortBy = ({sort, setSort}:SortedByProps) => { 
     
    return ( 
        <div className='flex items-center justify-end gap-3'> 
            <span className='text-gray-800 text-sm font-bold'>Sort By</span> 

            <div className="relative"> 

            <select value={sort} 
            onChange={(e) => setSort(e.target.value)} 
            className='appearance-none rounded-xl border border-gray-300 bg-blue-200 px-4 py-2.5 pr-10  text-gray-800 font-semibold outline-none cursor-pointer'> 
                <option value="duration">Duration</option> 
                <option value="calories">Calories</option> 
                <option value="rating">Rating</option> 
            </select> 
 
                     <IoMdArrowDropdown  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800" 
                    size={20} /> 
                 
            </div> 
        </div> 
    ); 
}; 
 
export default SortBy;