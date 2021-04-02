import Create from "./Create";
import Search from "./Search";

function Feature(){
    return(
        <div className="feature-box">
            <div className="feature-search">
                <Search />
            </div>
            <div className="feature-form">
                <Create />
            </div>
        </div>
    )
}

export default Feature;