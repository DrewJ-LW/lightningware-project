<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';

	const { children } = $props();

	const year = new Date().getFullYear();

	const socialLinks = [
		{ name: 'Instagram', url: 'https://instagram.com/officialthundr/' },
		{ name: 'Tiktok', url: 'https://tiktok.com/@thundr.com' },
		{ name: 'Twitter', url: 'https://x.com/usethundr' },
		{ name: 'Discord', url: 'https://discord.com/invite/JZQ9Bc7Y4j' },
		{ name: 'Reddit', url: 'https://reddit.com/r/thundr' }
	];
</script>

<header class="header-content">
	<div class="logo"><a href={resolve('/')}>
	<img src="/logo.png" alt="Logo">
	</a></div>
	<div class="nav-links">
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/about')}>About Us</a>
		<a href={resolve('/products')}>Products</a>
		<a href={resolve('/support')}>Support</a>
	</div>
	<div class="contact">
		<button>Contact Us</button>
	</div>
</header>

{@render children()}

<footer>
	<div class="footer-content">
		<div class="company-info">
			<h3>© Lightningware {year}</h3>
			<div class="footer-social-links">
				<ul>
					{#each socialLinks as link (link.url)}
						<li>
							<a href={link.url} target="_blank" rel="external noopener noreferrer">
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
