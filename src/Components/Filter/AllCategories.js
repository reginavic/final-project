import Filter from "./Filter";

const AllCategories = () =>{
    return( <div className="column">
        
        <h1>What kind of food do you like?</h1>
        
        {['ALL', 'SALADS', 'ITALIAN', 'SEAFOOD', 'APPETIZERS'].map(category => <Filter key={category.toString()} category={category} /> )}
    
        </div>

    );
}

export default AllCategories;