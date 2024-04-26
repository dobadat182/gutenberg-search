import react, { useEffect, useState } from "react";
import axios from "axios";
import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	const baseUrl = "http://wordpress.local";
	// const [data, setData] = useState([]);
	let data;

	useEffect(() => {
		async function getPosts() {
			const response = await axios.get(`${baseUrl}/wp-json/wp/v2/posts`);
			data = response.data;

			console.log(data);
		}

		getPosts();
	}, []);

	return (
		<div {...useBlockProps.save()}>
			<h1>Get data - from saved </h1>

			{data && posts.map((post) => <h3 key={post.id}>Example</h3>)}
		</div>
	);
}
