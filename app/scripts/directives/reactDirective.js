import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Grid from 'es6!./grid';

let directive = () => {
	return {
    	template : '<div></div>',
    	scope : {},
    	link : function($scope, elem, attrs){
    		ReactDom.render(<MyComponent />, elem[0]);
    	}
    };
};

export {directive};

export class MyComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : []
		}
		this.createDataclick = this.createDataclick.bind(this);
	}

	componentDidMount(){
		this.createData(7, 4, 200);
	}

	createData(x, y, r){
		var arr = [];
		for(var i=0; i< r; i++){
			var z = [];
			for(var k=0; k<10; k++){
				var randomValue  = Math.floor((Math.random() * x) + y);
				z.push(randomValue);
			}
			arr.push(z);
		}
		this.setState({data: arr})			
	}

	createDataclick(){
		this.createData(3, 1, 3000);
	}

	render(){
		return(
			<div>
				<h1>React Demo</h1>
				<button type="button" onClick={this.createDataclick}>Generate data</button>
				<Grid rows={this.state.data} />
			</div>
		)
	}
}