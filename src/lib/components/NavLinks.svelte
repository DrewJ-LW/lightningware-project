<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';


    let { navLinks } = $props();
    

    let menuOpen = $state(false);

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

<!-- mobile nav button -->
<div class="md:hidden">
    <button onclick={() => (menuOpen = !menuOpen)}>
    {#if !menuOpen}
        ☰
    {:else}
        ✕
    {/if}
    </button>
</div>

<!-- mobile nav menu -->
{#if menuOpen}
    <div class="absolute flex flex-col gap-fgap top-full right-5 mt-2 w-48 p-10 bg-background rounded-md shadow-lg py-2 z-50">
        {#each navLinks as link (link.href)}
			<a
				class="text-heading text-lg hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
				class:text-accent={isActiveNavLink(link.href)}
				aria-current={isActiveNavLink(link.href) ? 'page' : undefined}
				href={resolve(link.href)}
                onclick={closeMenu}
			>
				{link.name}
			</a>
		{/each}
    </div>
{/if}

<!-- desktop nav menu -->
<div class="hidden md:flex items-center justify-center gap-10 justify-self-center text-sm font-medium text-text-lt">
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
