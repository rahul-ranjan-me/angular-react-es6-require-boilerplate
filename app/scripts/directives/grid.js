import React, {Component} from 'react';
import _ from 'lodash';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			rows : this.props.rows,
		}
		this.createTablebody = this.createTablebody.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.rows !== this.state.rows){
			this.setState({
				rows : nextProps.rows
			})
		}
	}

	createTablebody(cells, i){
		return <TDs cells={cells} keyid={i} />
	}

	render(){
		return(
			<table>
				<tbody>
					{this.state.rows.map(this.createTablebody)}
				</tbody>
			</table>
		)
	}
}

export class TDs extends Component{
	constructor(props){
		super(props);
		this.createCells = this.createCells.bind(this);
	}

	createCells(cell, i){
		let keyid = this.props.keyid.toString() + i,
			cssClass = 'white';

		if(cell === 1){
			cssClass = "orange";
		}else if(cell === 2){
			cssClass = "green";
		}else if(cell === 3){
			cssClass = "red";
		}

		return <td className={cssClass} key={keyid}>{cell}</td>
	}

	render(){
		return(
			<tr key={this.props.keyid}>
				{this.props.cells.map(this.createCells)}
			</tr>
		)
	}
}