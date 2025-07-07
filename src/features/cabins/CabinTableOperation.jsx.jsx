import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy';
function CabinTablesOperations() {
    return (
        <TableOperations>
             <Filter filterFeild={'discount'} options={[
                {value:'all',label:'All'},
                {value:'with-discount',label:'With-discount'},
                {value:'no-discount',label:'No-discount'},
                
             ]}/>

             <SortBy options={[{value:'name-asc',label:'Sort by name (A-Z)'},
           { value:'name-desc',label:'Sort by name (Z-A)'},
            { value:'regular-Price-asc',label:'Sort by price(low first)'},
             { value:'regular-Price-desc',label:'Sort by price(high first)'},
                 { value:'maxCapacity-asc',label:'Capacity(low first)'},
                 { value:'maxCapacity-descs',label:'Capacity(high first)'},


           ]}/>
        </TableOperations>
    )
}





export default CabinTablesOperations;