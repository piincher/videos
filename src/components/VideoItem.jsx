import React from 'react';

const VideoItem = ({ video }) => {
	return (
		<div>
			<img src={video.snippet.thumbnails.meduim.url} />
			{video.snippet.title}
		</div>
	);
};

export default VideoItem;
