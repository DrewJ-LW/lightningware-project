<script lang="ts">
    // imports
    import { twMerge } from 'tailwind-merge';
    
    // props
    let {
        icon = '',
        iconClass = '',
        cardClass = '',
        title = 'Card Title',
        description = 'This is a description of the card. It provides more details about the content and purpose of the card.'
    } = $props();

    const defaultCardClass = 'relative max-w-xs rounded-3xl border border-border-dk bg-background-dk p-5 pt-16';
    const mergedCardClass = $derived(twMerge(defaultCardClass, cardClass));
    const defaultIconClass = 'h-25 w-25';
    const mergedIconClass = $derived(twMerge(defaultIconClass, iconClass));

    const useMaskIcon = $derived(icon.endsWith('.svg'));

</script>

<!-- card container -->  
   
<div class={mergedCardClass}>

    <!-- card icon box -->
    <div class="absolute top-0 left-1/2 z-10 flex h-25 w-50 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-border-dk bg-background-dk">
        <!-- <img src={icon} alt="An icon gift" class="h-25 w-25"> -->
         {#if useMaskIcon}
         <span
         class={`${mergedIconClass}`}
         style={`mask: url(${icon}) center / contain no-repeat;
          -webkit-mask: url(${icon}) center / contain no-repeat;`}
			aria-hidden="true"
         >
         </span>
            {:else}
            <img src={icon} alt="An icon gift" class={mergedIconClass}>
            {/if}
    </div>

    <!-- card description -->
    <h2 class="text-2xl font-semibold text-accent">{title}</h2>
    <p class="">{description}</p>
</div>
