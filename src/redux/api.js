import axios from 'axios';

const path = process.env.PUBLIC_URL;

export const getYoutube = async () => {
	const key = 'AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo';
	const num = 10;
	const id = 'PLMaY0ixOiyljR7EsFnCk9HPiR7eNsI6Yd';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	return await axios.get(url);
};

export const getMember = async () => {
	const url = path + '/DB/member.json';

	return await axios.get(url);
};
