import client from '$lib/sanityClient.js';

export async function load({ params }) {
	const posts = await client.fetch(`*[_type == "post"][0]`);

	if (posts) {
		return {
			posts: posts
		};
	}

	return {
		status: 500,
		body: new Error('No post found')
	};
}
