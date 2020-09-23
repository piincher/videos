import React from 'react';
import SearchBar from './SearchBar.component';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
	state = { videos: [] };
	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setstate({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container ">
				<SearchBar onformsubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
