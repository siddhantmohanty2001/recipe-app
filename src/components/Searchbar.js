

const Searchbar = ({submit,text,setText}) => {
    
    return (
        <div>
            <form className="form" onSubmit={submit}>
            <div ><input className="searchbar" type="text" placeholder="Search Recipes"  value={text} onChange={(e)=>{setText(e.target.value); }}></input> <input className="searchbtn" type="submit" value="search"></input></div>
            </form>
            
        </div>
    )
}

export default Searchbar
