

interface SortedByProps{
    sort: string
    setSort: React.Dispatch<React.SetStateAction<string>>;}

const SortBy = ({sort, setSort}:SortedByProps) => {
    

    const handleSort = (value: string) =>{
        setSort(value);
    }
    return (
        <div className='mt-8 flex items-center justify-end gap-3'>
            <span className='text-gray-800 text-xm font-bold'>Sort By</span>

            <select value={sort}
            onChange={(e) => handleSort(e.target.value)}
            className='rounded-xl border border-gray-300 bg-blue-200 px-4 py-3 text-gray-800 font-semibold outline-none cursor-pointer'>
                <option value={"duration"}>Duration</option>
                <option value="shortest">Shortest</option>
                <option value="longest">Longest</option>
            </select>
        </div>
    );
};

export default SortBy;