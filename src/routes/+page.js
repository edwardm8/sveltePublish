/** @type {import('./$types').PageLoad} */

let name = "Bob"
export function load({ params }) {
	return {
		post: {
			title: `Title for ${name} goes here`,
			content: `Content for ${name} goes here`
		}
	};
}