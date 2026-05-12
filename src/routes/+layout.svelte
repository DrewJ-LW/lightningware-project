<script lang="ts">
	import '@fontsource/exo-2/400.css';
	import '@fontsource/exo-2/600.css';
	import '@fontsource/exo-2/700.css'; 
	import './layout.css';
	import { resolve } from '$app/paths';

	import Button from '$lib/components/Button.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NavLinks from '$lib/components/NavLinks.svelte';

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


	
</script>


<header
	class="fixed
	top-4 left-0 right-0 md:mx-auto z-50 
	overflow-visible
	px-6
	flex w-screen
	min-h-[75px] max-h-[75px] md:w-[calc(100%_-_2rem)] md:max-w-[1300px] 
	md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 
	items-center place-content-between
	bg-transparent"
>
	<div class="clip-pointed pointer-events-none absolute inset-0 -z-10 bg-background" aria-hidden="true"></div>

	<Logo />


	<!-- nav menu -->
	 <NavLinks navLinks={navLinks} />

	<!-- contact button -->
	<div class="hidden md:block justify-self-end max-[760px]:col-start-2 max-[760px]:row-start-1">
		<Button />
	</div>
</header>


{@render children()}

<footer>
	<div class="footer-content md:max-w-7xl mx-auto rounded-3xl bg-background">

		<div class="body-width p-5 md:p-15 flex flex-col md:flex-row gap-5 md:gap-20">
			<div class="md:max-w-150 flex flex-col gap-fgap order-3 md:order-first">
				<Logo />
				<p>Driving innovation in social and entertainment technology to create meaningful digital experiences</p>
			</div>
			<div class="flex gap-10 body-width">
				<div>
					<h2 class="mb-3">Quick Links</h2>
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
		</div>



		<div class="company-info w-9/10 mx-auto flex flex-col md:flex-row place-content-between items-center border-t py-5  border-accent">
			<h3 class="w-full">© Lightningware {year}</h3>
			<div class="footer-social-links body-width mx-5">
				<ul class="flex place-content-between md:place-content-end">
					{#each socialLinks as link (link.url)}
						<li class="w-13.5 h-10 p-0 md:ml-5">
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
