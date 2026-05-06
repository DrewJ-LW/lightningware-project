<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';

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
<div class="postion-fixed top-20 left-0 w-full">
	<header
		class="clip-pointed fixed 
		top-4 left-1/2 z-50 
		grid 
		min-h-[75px] w-[calc(100%_-_2rem)] max-w-[1250px] -translate-x-1/2 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 
		items-center 
		bg-background px-8 shadow-soft [--point-size:24px] max-[760px]:grid-cols-[minmax(0,1fr)_auto] max-[760px]:gap-y-3 max-[760px]:px-6"
	>
		<a class="flex items-center justify-self-start" href={resolve('/')}>
			<img class="h-14 max-w-79" src="/logo.png" alt="Logo" />
		</a>
		<div
			class="flex items-center justify-center gap-8 justify-self-center text-sm font-semibold text-text-lt max-[760px]:col-span-full max-[760px]:row-start-2 max-[760px]:flex-wrap max-[760px]:gap-x-5 max-[760px]:gap-y-2"
		>
			<a class="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent" href={resolve('/')}>
				Home
			</a>
			<a
				class="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
				href={resolve('/about')}
			>
				About Us
			</a>
			<a
				class="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
				href={resolve('/products')}
			>
				Products
			</a>
			<a
				class="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
				href={resolve('/support')}
			>
				Support
			</a>
		</div>
		<div class="justify-self-end max-[760px]:col-start-2 max-[760px]:row-start-1">
			<Button />
		</div>
	</header>
</div>

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
