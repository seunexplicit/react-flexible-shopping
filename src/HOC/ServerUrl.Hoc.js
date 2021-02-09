import React from 'react';

export default function serverUrl(Components){
	return class extends React.Component{
		constructor(props){
			super(props);
			this.serverurl = 'http://localhost:3001';
		}

		render(){
			return <Components serverurl={this.serverurl} {...this.props}></Components>
		}
	}
}