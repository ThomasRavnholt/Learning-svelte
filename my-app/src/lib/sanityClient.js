import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '7apmleej',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

export default client;
