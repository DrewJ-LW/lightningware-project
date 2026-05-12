<script>
    import Button from '$lib/components/Button.svelte';

    let { buttonText = 'Our Products',
        buttonLink = '/products'
     } = $props();


</script>



<div class="grid grid-cols-2 gap-4 max-w-105">
    <div class="border-r-accent border-r-2">
        <h1 class="text-7xl font-normal">8M+</h1>
        <p>Monthly Visits</p>
    </div>
    <div>
        <h1 class="text-7xl font-normal">81 k+</h1>
        <p>Daily Visits</p>
    </div>
    <Button link={buttonLink} text={buttonText}/>
</div>