import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



export class ConnexionForm extends Component {
    constructor(props){
        super(props)
        let loggedIn = false;
        console.log(this.props.lg)
        this.state = {
            email:"",
            password:"",
            loggedIn,
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {email, password} = this.state
        //connexion appel
        axios.post('http://localhost:8888/utilisateur/connexion', { email, password })
          .then(res => {
            console.log(res.data.resultat);
            if(res.data.resultat==1){
                console.log(this.props.lg);
                this.props.gg(true)
                //console.log(this.props.gg);
                console.log(this.props.lg);
                this.props.history.goBack();
                console.log(email);
                this.props.setMail(email)
                console.log(this.props.email);
            }else{
                console.log(res.data.message);
            }
     //       this.setState({loggedIn = true})
            //access the results here....
            //this.props.history.goBack();
          }).catch(function (error){
            console.log(error);})

          };
    
    
    render() {
      //  if loggedIn true = return <redirect></redirect>
        return (
            <div>
                <h1>
                    Se connecter
                </h1>

                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="email" name="email"
                    value={this.state.email} onChange={this.onChange}/>
                    <br/>
                    <input type="password" placeholder="password" name="password"
                    value={this.state.pasword} onChange={this.onChange}/>
                    <br/>
                    <input type="submit" value="Valider"/>
                    <br/>
                </form>
                
            </div>
        )
    }
}

export default ConnexionForm;