import axios from 'axios';

const path = process.env.PUBLIC_URL;

export const getFlickr = async (opt) => {
	const base = 'https://www.flickr.com/services/rest/?';
	const method_people = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';
	const username = '195472166@N07';
	const key = '949d2b707bcfc12c7431235b98a8cab0';
	const num = 9;
	let url = '';

	if (opt.type === 'fav') {
		url = `${base}method=${method_people}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}`;
	}

	if (opt.type === 'search') {
		url = `${base}method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
	}

	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo';
	const num = 5;
	const id = 'PLMaY0ixOiylgi2wg6fDq62W0mzdWVmwnU';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	return await axios.get(url);
};

export const getMember = async () => {
	const url = path + '/DB/member.json';

	return await axios.get(url);
};
