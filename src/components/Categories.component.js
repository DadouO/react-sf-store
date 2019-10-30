import React, {Component} from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FilteredProducts from './FilteredProducts';

// const Categories = () => {
export class Categories extends Component {
   

    state ={
        categories: [],
        produits: []
    };

    componentDidMount(){
        axios.get('http://localhost:8888/categories').then(res => {
            console.log(res);
            this.setState({ categories : res.data});
            console.log(" dANS CAT   ",this.props.lg)
        }).catch(function (error){
            console.log(error);})
    };
    

    render(){
    return (
    <div className="card-container">
        <List>
            <ListItem><br/>
            {this.props.lg && (
            <ListItemText>
                {this.state.categories.map(cat =>
                   <Link key={cat.type} to={{
                        pathname:'/FilteredProducts',
                        CatToFilter: cat 
                }}><br/>{cat}<br/></Link>)}</ListItemText>) ||
                (this.state.categories.map(cat =>
                    <ListItemText key={cat.type}><br/>
                    {cat} 
                </ListItemText>))}
                <Route path="/FilteredProducts" component={FilteredProducts}/>
            </ListItem>
        </List>

    </div>
    );
    }
  }

  export default Categories;
