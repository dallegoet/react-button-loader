import React, { Component } from 'react'
import ButtonLoader from '@dallegoet/react-button-loader'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			isLoading: true,
		});

		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 3000);
	}

  render () {
    return (
      <div>
        <ButtonLoader onClick={this.handleClick} isLoading={this.state.isLoading}>
        	Click me !
        </ButtonLoader>
      </div>
    )
  }
}
