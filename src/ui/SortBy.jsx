import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({options}) {
const [searchParams,setSearchParams]=useSearchParams();
const currentlySelected = searchParams.get('sort-by')  ||options[0].value;

    function handleChange(e){
         const newSearchParams = new URLSearchParams(searchParams);

            newSearchParams.set('sort-by',e.target.value);
            setSearchParams(newSearchParams)
    }
    return (
        <Select options={options} type="white" onChange={handleChange} value={currentlySelected}/>
       
    )
}

export default SortBy; 