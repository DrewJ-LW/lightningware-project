<script lang="ts">
	import { resolve } from '$app/paths';

	type Props = {
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		link?: string;
		text?: string;
	};

	let {
		type = 'button',
		disabled = false,
		link = '/support',
		text = 'Contact Us'
	}: Props = $props();

	const classes = 'brand-button clip-pointed';

	function isExternalLink(url: string) {
		return /^[a-z][a-z0-9+.-]*:|^\/\//i.test(url);
	}
</script>

{#if link && isExternalLink(link)}
	<a
		href={disabled ? undefined : link}
		rel="external noopener noreferrer"
		aria-disabled={disabled}
		class={`${classes} ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
	>
		{text}
	</a>
{:else if link}
	<a
		href={disabled ? undefined : resolve(link as Parameters<typeof resolve>[0])}
		aria-disabled={disabled}
		class={`${classes} ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
	>
		{text}
	</a>
{:else}
	<button {type} {disabled} class={classes}>
		{text}
	</button>
{/if}
