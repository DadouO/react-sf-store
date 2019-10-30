import React, {Component} from 'react';
import axios from 'axios';
import ProduitCard from './ProduitCard';

//const Produit = () => {
export class Produit extends Component {
  // constructor(props){
  //   super(props)
  //   console.log(this.props.lg);
  //   this.state = {
  //       produits: []
  //   };
  // }
  state = {
    produits: []
};



    componentDidMount(){
        axios.get('http://localhost:8888/produits')
        .then(res => {
            console.log(res);
            this.setState({ produits : res.data});
        }).catch(function (error){
            console.log(error);})
    };

    render(){

        const produits = this.state.produits;
        console.log("PrintProduit: " + produits);
        let ProduitList;
    
        if(!produits) {
          ProduitList = "there is no product!";
        } else {
            ProduitList = produits.map(produit =>(
            <ProduitCard produit={produit} key={produit._id} auth={this.props.lg}/>
            ));
        }
    
        // ProduitList = produits.map((produit, k) =>
{/* <ProduitCard produit={produit} key={k} auth={this.props.lg}/> */}
        



        return (
          <div className="ProduitList">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <br />
                </div>
              </div>
              <div className="list">
                    {ProduitList}
              </div>
            </div>
          </div>
        );    
        }
  }

  export default Produit;