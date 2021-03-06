import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onChangeInput = (event) => {
		this.setState({ term: event.target.value });
	};
	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onformsubmit(this.state.term);
	};
	render() {
		return (
			<div onSubmit={this.onFormSubmit} className="search-bar ui segment">
				<form className="ui form ">
					<div className="field ">
						<label>Video search </label>
						<input type="text" value={this.state.term} onChange={this.onChangeInput} />
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
