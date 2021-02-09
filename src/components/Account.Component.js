import React from 'react';
import { withRouter, Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import ServerUrl from '../HOC/ServerUrl.Hoc';

class AccountComponent extends React.Component{


	constructor(props){
		super(props)

		this.state = {
			newUser:{},
			signinInfo:{}
		}

		this.signinAccount = this.signinAccount.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.submitSigninForm = this.submitSigninForm.bind(this);
		this.submitCreateAccountForm = this.submitCreateAccountForm.bind(this);
	}

	signinAccount(e){

		if(e.target.name==='username'){
			this.setState({
				signinInfo:{...this.state.signinInfo, username:e.target.value}
			})
		}
		else if(e.target.name==='password'){
			this.setState({
				signinInfo:{...this.state.signinInfo, password:e.target.value}
			})
		}
	}
	
	createAccount(e){
		if(e.target.name==='username'){
			this.setState({
				newUser:{...this.state.newUser, userName:e.target.value}
			})
		}
		else if(e.target.name==='lastname'){
			this.setState({
				newUser:{...this.state.newUser, lastName:e.target.value}
			})
		}
		else if(e.target.name==='firstname'){
			this.setState({
				newUser:{...this.state.newUser, firstName:e.target.value}
			})
		}
		else if(e.target.name==='shopname'){
			this.setState({
				newUser:{...this.state.newUser, shopName:e.target.value}
			})
		}
		else if(e.target.name==='password'){
			this.setState({
				newUser:{...this.state.newUser, password:e.target.value}
			});
		}

		console.log(this.state);
	}

	submitSigninForm(e){}
	submitCreateAccountForm(e){
		e.preventDefault();
		axios.post(this.props.serverurl+'/seller/post-seller', this.state.newUser).then(
			(response)=>{console.log(response.data)},
			(err)=>{console.log(err)})
	}
	
	render(){
		return(
			<div>
				<Router>
					<Switch>
						<Route path={this.props.match.url+'/create-account'}>
							<CreateAccountComp change={this.createAccount} match={this.props.match} submit={this.submitCreateAccountForm}/>
						</Route>
						<Route path={this.props.match.url+'/'}>
							<SigninAccountComp change={this.signinAccount} match={this.props.match} submit={this.submitSigninForm}/>
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
}
let AccountWithUrl = ServerUrl(AccountComponent)
export default withRouter(AccountWithUrl);


function SigninAccountComp(props){
	return(
		<div className="flex-row center-display">
			<form onSubmit={props.submit}>
				<div className="form-wrapper flex-col">
					<label>Username</label>
					<input type="text" name="username" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<label>Password</label>
					<input type="password" name="password" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<input type="submit" value="Login"/>
				</div>
				<div className="form-wrapper flex-col">
					<Link to={props.match.url+'/create-account'}>
						No Account Yet?
					</Link>
				</div>
			</form>
		</div>
		)
}

function CreateAccountComp(props){
	return(
		<div className="flex-row center-display">
			<form onSubmit={props.submit}>
				<div className="form-wrapper flex-col">
					<label>Username</label>
					<input type="text" name="username" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<label>First Name</label>
					<input type="text" name="firstname" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<label>Last Name</label>
					<input type="text" name="lastname" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<label>Shop Name</label>
					<input type="text" name="shopname" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<label>Password</label>
					<input type="password"  name="password" onChange={props.change}></input>
				</div>
				<div className="form-wrapper flex-col">
					<input type="submit" value="Create Account"/>
				</div>
				<div className="form-wrapper flex-col">
					<Link to={props.match.url+'/'}>
						Have An Account?
					</Link>
				</div>
			</form>
		</div>
		)
}
