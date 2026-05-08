<script lang="ts">
	import '@fontsource/exo-2/400.css';
	import '@fontsource/exo-2/600.css';
	import '@fontsource/exo-2/700.css'; 
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';

	const { children } = $props();

	const year = new Date().getFullYear();

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Products', href: '/products' },
		{ name: 'Support', href: '/support' }
	] as const;

	const socialLinks = [
		{ name: 'Instagram', url: 'https://instagram.com/officialthundr/' },
		{ name: 'Tiktok', url: 'https://tiktok.com/@thundr.com' },
		{ name: 'Twitter', url: 'https://x.com/usethundr' },
		{ name: 'Discord', url: 'https://discord.com/invite/JZQ9Bc7Y4j' },
		{ name: 'Reddit', url: 'https://reddit.com/r/thundr' }
	];

	function isActiveNavLink(href: (typeof navLinks)[number]['href']) {
		const resolvedHref = resolve(href);
		const currentPath = page.url.pathname;

		return resolvedHref === resolve('/')
			? currentPath === resolvedHref
			: currentPath === resolvedHref || currentPath.startsWith(`${resolvedHref}/`);
	}
</script>

<div class="postion-fixed top-20 left-0 w-full">
	<header
		class="clip-pointed fixed 
		top-4 left-1/2 z-50 
		grid 
		min-h-[75px] max-h-[75px] w-[calc(100%_-_2rem)] max-w-[1300px] -translate-x-1/2 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 
		items-center 
		bg-background px-6 shadow-soft [--point-size:24px] max-[760px]:grid-cols-[minmax(0,1fr)_auto] max-[760px]:gap-y-3 max-[760px]:px-6"
	>
		<a class="flex items-center justify-self-start" href={resolve('/')}>
			<img class="h-19 max-w-79" src="/logo.png" alt="Logo" />
		</a>
		<div id="nav"
			class="flex items-center justify-center gap-10 justify-self-center text-sm font-medium text-text-lt max-[760px]:col-span-full max-[760px]:row-start-2 max-[760px]:flex-wrap max-[760px]:gap-x-5 max-[760px]:gap-y-2"
		>
			{#each navLinks as link (link.href)}
				<a
					class="text-heading text-lg hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
					class:text-accent={isActiveNavLink(link.href)}
					aria-current={isActiveNavLink(link.href) ? 'page' : undefined}
					href={resolve(link.href)}
				>
					{link.name}
				</a>
			{/each}
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
