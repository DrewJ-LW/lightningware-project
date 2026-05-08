<script lang="ts">
    // imports

    // props
    let {
        icon = '',
        title = 'Card Title',
        description = 'This is a description of the card. It provides more details about the content and purpose of the card.'
    } = $props();

</script>

<!-- card container -->
<div class="relative">
    <!-- card title box -->
    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 border rounded-3xl border-border-dk p-4 flex items-center justify-center w-50 h-25 bg-background-dk">
        <img src="{icon}" alt="An icon gift" class="h-25 w-25">
    </div>
    <!-- card description -->
     <div class="absolute left-1/2 transform -translate-x-1/2 border rounded-3xl border-border-dk max-w-xs pt-12 p-5">
        <h2 class="text-2xl font-semibold text-accent">{title}</h2>
        <p class="">{description}</p>
    </div>
</div>