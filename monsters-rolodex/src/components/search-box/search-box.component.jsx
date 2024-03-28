import { Component } from "react";



class SearchBox extends Component {

    render(){
        return (
        <div>
             {/*Input field for searching monsters*/}
             <input
                type="search"
                className={this.props.className}
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        </div>
        )
    }
}


export default SearchBox