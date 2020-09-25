import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>loading ...</div>;
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div clasName="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};
export default VideoDetail;