<script lang="ts">
	import '@fontsource/exo-2/400.css';
	import '@fontsource/exo-2/600.css';
	import '@fontsource/exo-2/700.css'; 
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import Logo from '$lib/components/Logo.svelte';

	const { children } = $props();

	const year = new Date().getFullYear();

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Products', href: '/products' },
		{ name: 'Support', href: '/support' }
	] as const;

	const socialLinks = [
		{ name: 'Instagram', url: 'https://instagram.com/officialthundr/', icon: '/socials/instagram.svg' },
		{ name: 'Tiktok', url: 'https://tiktok.com/@thundr.com', icon: '/socials/tiktok.svg' },
		{ name: 'Twitter', url: 'https://x.com/usethundr', icon: '/socials/x.svg' },
		{ name: 'Discord', url: 'https://discord.com/invite/JZQ9Bc7Y4j', icon: '/socials/discord.svg' },
		{ name: 'Reddit', url: 'https://reddit.com/r/thundr', icon: '/socials/reddit.svg' }
	];

	let menuOpen = false;

	function closeMenu() {
		menuOpen = false;
	}

	function isActiveNavLink(href: (typeof navLinks)[number]['href']) {
		const resolvedHref = resolve(href);
		const currentPath = page.url.pathname;

		return resolvedHref === resolve('/')
			? currentPath === resolvedHref
			: currentPath === resolvedHref || currentPath.startsWith(`${resolvedHref}/`);
	}
	
</script>


<header
	class="clip-pointed fixed 
	top-4 left-1/2 z-50 
	grid 
	px-6
	min-h-[75px] max-h-[75px] w-[calc(100%_-_2rem)] max-w-[1300px] -translate-x-1/2 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 
	items-center 
	bg-background"
>
	<Logo />
	<div id="nav"
		class="hidden md:flex items-center justify-center gap-10 justify-self-center text-sm font-medium text-text-lt max-[760px]:col-span-full max-[760px]:row-start-2 max-[760px]:flex-wrap max-[760px]:gap-x-5 max-[760px]:gap-y-2"
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


{@render children()}

<footer>
	<div class="footer-content max-w-7xl mx-auto rounded-3xl bg-background">

		<div class="p-15 flex flex-row gap-20">
			<div class="max-w-150 flex flex-col gap-fgap">
				<Logo />
				<p>Driving innovation in social and entertainment technology to create meaningful digital experiences</p>
			</div>
			<div class="flex flex-col gap-10">
				<h2>Quick Links</h2>
				<ul class="flex flex-col gap-fgap">
					{#each navLinks as link (link.href)}
						<li>
							<a href={resolve(link.href)}>{link.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col gap-10">
				<h2>Legal</h2>
				<ul class="flex flex-col gap-fgap">
					<li>
						<a href={resolve('/privacy')}>Privacy Policy</a>	
					</li>
					<li>
						<a href={resolve('/TOS')}>Terms of Service</a>
					</li>
				</ul>
			</div>
		</div>



		<div class="company-info w-9/10 mx-auto flex place-content-between items-center border-t py-5  border-accent">
			<h3>© Lightningware {year}</h3>
			<div class="footer-social-links">
				<ul class="flex">
					{#each socialLinks as link (link.url)}
						<li class="w-13.5 h-10 p-0 ml-5">
							<Button link={link.url} class="w-13.5 h-10 p-0">
								<img src={link.icon} alt={`${link.name} icon`} class="h-5 w-5 p-0" />
							</Button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
