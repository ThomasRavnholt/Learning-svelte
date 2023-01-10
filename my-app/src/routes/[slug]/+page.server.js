import { error } from '@sveltejs/kit';
import client from '$lib/sanityClient.js';

export async function load({ params }) {
	const posts = await client.fetch(`*[_type == "post"]{
		title,
		"url": slug.current,
		"imageUrl": mainImage.asset->url,
	}`);

	const post = posts.find((post) => post.url === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}
