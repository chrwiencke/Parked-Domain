import { parse } from 'tldts';

export default {
	async fetch(request, env, ctx) {
		// Get the URL of the request
		const url = new URL(request.url);

		// Extract the domain (host) from the URL
		const domain = parse(url.host).domain;

		const html = `
		<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${domain}</title>
    <style>
      body {
        min-height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        color: #2d3748;
        text-align: center;
      }
      .container {
        padding: 2rem;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      h1 {
        margin: 0 0 1rem 0;
      }
      p {
        margin: 0;
        color: #4a5568;
      }
      a {
        color: #4299e1;
        text-decoration: none;
        transition: color 0.2s;
      }
      a:hover {
        color: #2b6cb0;
      }
    </style>
</head>
<body>
    <div class="container">
        <h1>The domain ${domain} is parked</h1>
        <p>Want to contact the owner? <a href="mailto:contact@${domain}">contact@${domain}</a></p>
    </div>
</body>
</html>`;

		return new Response(html, {
			headers: {
				'content-type': 'text/html;charset=UTF-8',
			},
		});
	},
};
