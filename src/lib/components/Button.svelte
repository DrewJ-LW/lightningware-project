<script lang="ts">
	import { resolve } from '$app/paths';

	type Props = {
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		link?: string;
		text?: string;
		class?: string;
	};

	let {
		type = 'button',
		disabled = false,
		link = '/support',
		text = 'Contact Us',
		class: className = ''
	}: Props = $props();

	const classes = 'brand-button button-polygon';
	const faceClasses = 'brand-button-face button-polygon';
	let disabledClasses = $derived(disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : '');

	function isExternalLink(url: string) {
		return /^[a-z][a-z0-9+.-]*:|^\/\//i.test(url);
	}
</script>

{#if link && isExternalLink(link)}
	<a
		href={disabled ? undefined : link}
		rel="external noopener noreferrer"
		aria-disabled={disabled}
		class={`${classes} ${disabledClasses}`}
	>
		<span class={`${faceClasses} ${className}`}>
			{text}
		</span>
	</a>
{:else if link}
	<a
		href={disabled ? undefined : resolve(link as Parameters<typeof resolve>[0])}
		aria-disabled={disabled}
		class={`${classes} ${disabledClasses}`}
	>
		<span class={`${faceClasses} ${className}`}>
			{text}
		</span>
	</a>
{:else}
	<button {type} {disabled} class={`${classes} ${disabledClasses}`}>
		<span class={`${faceClasses} ${className}`}>
			{text}
		</span>
	</button>
{/if}

<style>
	@layer components {
		.button-polygon {
			clip-path: polygon(
				0 50%,
				var(--point-size, 12px) 0,
				calc(100% - var(--point-size, 12px)) 0,
				100% 50%,
				calc(100% - var(--point-size, 12px)) 100%,
				var(--point-size, 12px) 100%
			);
		}

		.brand-button {
			--button-point-size: 16px;
			--button-border-width: 4px;
			--button-corner-compensation: (var(--button-border-width) / 2);
			--point-size: var(--button-point-size);
			width: max-content;
			display: inline-flex;
			background-color: var(--color-accent);
			padding: var(--button-border-width);
			transition-property: color, background-color, border-color, outline-color, text-decoration-color,
				fill, stroke;
			transition-duration: 200ms;
		}

		.brand-button:focus {
			outline: 2px solid transparent;
			outline-offset: 2px;
			box-shadow: 0 0 0 2px var(--color-background-dk);
		}

		.brand-button:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}

		.brand-button-face {
			--point-size: calc(
				var(--button-point-size) - var(--button-border-width) + var(--button-corner-compensation)
			);
			display: inline-flex;
			align-items: center;
			justify-content: center;
			background-color: var(--color-accent);
			padding: 0.75rem 2rem;
			font-family: var(--font-heading);
			font-size: 1.125rem;
			font-weight: 600;
			line-height: 1.75rem;
			color: var(--color-text-dk);
			transition-property: color, background-color, border-color, outline-color, text-decoration-color,
				fill, stroke;
			transition-duration: 200ms;
		}

		.brand-button-face:hover {
			background-color: var(--color-yellow-md);
		}
	}
</style>
