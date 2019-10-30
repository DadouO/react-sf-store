import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    button: {
      alignSelf:'center',
    },
    input: {
      display: 'none',
    },
    card: {
      minWidth: 200,
      // maxWidth: 300,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

const ProduitCard = (props) => {
    const classes = useStyles();
    const  produit  = props.produit;
    const auth = props.auth;
    console.log("DANS PRODUITCARD "+auth)
    //this.handleButton = this.handleButton.bind(this)
    //let button;

    // const handleButton = event => {
    //     if (this.props.auth){
    //         button = <button> Ajouter au panier </button>
    //     }
    // }

/*     if (this.props.auth){
       return button = <button> Ajouter au panier </button>;
    } */
    
    return(
        <div className="card-container">
            <div className="desc">
                {/* <p>{produit.nom} - Type : {produit.type} - Année : {produit.publication} - Prix : {produit.prix}   
                {auth && <Button variant="contained" color="primary"> Ajouter au panier </Button>}
                </p> */}
            {/* </div> */}
            <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.title} variant="h6" component="h1">
            {produit.nom}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            Prix : {produit.prix} €
            </Typography>
            <Typography variant="body2" component="p">
            {produit.publication}
            <br />
            {produit.type}
            </Typography>
            </CardContent>
            <CardActions>
            {auth &&    <Button className="mx-auto" variant="contained" color="primary" size="small"> Ajouter au panier </Button>}
            </CardActions>
            </Card>
            <br />
            </div>

        </div>
    )
};

export default ProduitCard;