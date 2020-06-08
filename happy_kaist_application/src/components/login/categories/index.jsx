import React from 'react';
import Utensil from '../utensils';
import Buttonbar from '../buttonbar';
import { Link } from 'react-router-dom';
import './index.css';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryState: 1
        }
        this.oncategorySubmit = this.oncategorySubmit.bind(this);
    }

    oncategorySubmit(categoryState){
        this.setState(prevState => ({
            categoryState: categoryState
        }));
    }
    
    render(){
        return(
            <div className = "categoryForm">
                <Buttonbar oncategorySubmit = {this.oncategorySubmit}/>
                <div>
                    <Utensil state_num = {this.state.categoryState}/>
                </div>
                <div className = "buttonForm">
                    <Link to = "/login" className ="category_button">
                        <button className = "category_buttonStyle">Previous</button>   
                    </Link>
                    <Link to = "/mainpage" className ="category_button">
                        <button className = "category_buttonStyle">Submit</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Category;