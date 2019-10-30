import React,{useState, useEffect} from 'react';
import axios from 'axios';
import ProduitCard from './ProduitCard';


 const FilteredProducts = (props) => {
     //console.log("Filtered ", props.location.CatToFilter)
     const [produits, setProduits ]  = useState([]);
     let produitList;
    console.log(props.lg);
    
    useEffect(() => {
        axios.get('http://localhost:8888/produits/categorie/'+props.location.CatToFilter)
        .then(res => {
            console.log(res.data);
            setProduits(res.data);
           console.log(produits);
        }).catch(function (error){
            console.log(error);})
            console.log(produits)
    }, []);

    // produitList = produits.map((produit, k) =>
    // <ProduitCard produit={produit} key={k} />
    // );
 
        return (
           // <div className="produitList">
               <div>
              {produits.map(produit =>(
                 <ProduitCard produit={produit} key={produit._id} auth={props.lg}/>
                ))}</div>
           // </div>
            );
        
    }
export default FilteredProducts;
