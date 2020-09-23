import axios from 'axios';

const key = 'AIzaSyCCj3J7VeDybdtRleGS5209fB9BLWH0S9Q';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/search',
	params: {
		part: 'snippet',
		maxResults: 5,
		KEY: key,
		q: 'surfboards'
	}
});
