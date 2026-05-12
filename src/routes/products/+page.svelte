<script>
	import CallToAction from '$lib/components/CallToAction.svelte';
    import Stats from '$lib/components/Stats.svelte';
</script>

<div class="body-width flex flex-col md:grid md:grid-cols-[max-content_minmax(1fr,0)] md:gap-x-30 md:grid-flow-col mt-20 md:mt-25">
    <div class="w-fit order-first md:order-last">
        <img src="/thundr-phone.png" alt="Thundr Screenshot">
    </div>
    <div>
        <div class="body-width">
            <p class="text-accent">Thundr</p>
            <h1 class="mb-10">A human search engine for real <span class="text-accent">connections</span></h1>
            <p class="mb-10">Thundr is an app that lets you meet and talk to new people from anywhere in the world. You can think of it as a “human search engine”: you pick the interests you care about, and Thundr will connect you with someone who likes those same things. It’s designed for adults and can be used for making friends, finding someone special, or just having an interesting conversation. To help keep everything safe, Thundr uses artificial intelligence to moderate the platform. This AI looks out for any behavior that might be harmful or inappropriate, so you can feel more comfortable meeting new people. The goal is to offer a welcoming environment where you can talk freely without worrying about who’s on the other side. Thundr is simple to use, no matter how tech-savvy you are. All you need to do is log in, pick some interests, and let Thundr find your chat partner. Whether you’re there to make friends, search for a specific kind of person, or simply talk about the things you love, Thundr makes it easy to connect.</p>
        </div>
        <div class="w-full md:max-w-7xl md:mx-auto px-2 md:p-0 ">
            <Stats buttonText='Visit Thundr' buttonLink='https://thundr.com/'/>
        </div>
    </div>
</div>

<CallToAction />


