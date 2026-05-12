<script>
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Card from "$lib/components/Card.svelte";

    const cards = [
		{
			icon: '/icons/question.svg',
			title: 'Why We Do It',
			description: 'We want to bring stronger relationships...'
		},
		{
			icon: '/icons/idea.svg',
			title: 'Our Innovation',
			description: 'We use AI to better moderate...'
		},
		{
			icon: '/icons/team.svg',
			title: 'The Team',
			description: 'Our team is dedicated...'
		}
	];
</script>


<!-- hero banner -->
<div class="body-width mt-30 px-10 py-20 md:p-40 flex flex-col gap-fgap items-center rounded-3xl bg-background">
    <p class="text-accent">About us</p>
    <h1 class="font-normal text-center text-4xl md:text-6xl">Who We Are & Why We Build</h1>
</div>

<!-- content -->
<div class="body-width flex flex-col md:flex-row gap-20 mt-20 items-center">
    <img src="/about-us.png" alt="Phone displaying Thundr app" class="order-2 md:order-first">
    <div class="flex flex-col gap-fgap">
        <p class="text-accent">What we do</p>
        <h1>About <span class="text-accent font-normal">Lightningware</span></h1>
        <p>We’re not an agency. We don’t build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
        <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what’s possible.</p>
    </div>
</div>
<div class="body-width flex flex-col md:flex-row gap-20 justify-center">
	{#each cards as card(card.title)}
		<Card {...card} iconClass="bg-white h-16 w-16" cardClass="mt-0"/>
	{/each}
</div>

<!-- note -->
<div class="body-width bg-accent py-10 md:p-20 flex flex-col gap-5 items-center text-center rounded-3xl mt-30">
    <p class="text-black font-light">A note from the founder</p>
    <h1 class="text-black font-medium italic text-3xl md:text-4xl md:leading-15">“Lightningware is more than a company; it’s a movement towards better digital experiences. We’re here to push boundaries, reimagine social technology, and craft digital products that people love.”</h1>
    <p class="text-black font-bold md:text-2xl">— Callan Goldeneye, Founder & CEO</p>
</div> 

<!-- call to action -->
<CallToAction />