<script>
    import Button from '$lib/components/Button.svelte';
    import Globe from '$lib/components/Globe.svelte';
    import Card from '$lib/components/Card.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

    const avatars = [
        { src: '/avatars/avatar1.jpg', alt: 'Avatar 1' },
        { src: '/avatars/avatar2.jpg', alt: 'Avatar 2' },
        { src: '/avatars/avatar3.jpg', alt: 'Avatar 3' }
    ];
</script>

<!-- Hero Section -->
<div class="pt-50 px-5 body-width text-center grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-start">
    <!-- child 1 -->
    <div class="flex flex-col items-start gap-10 min-w-70 text-left">
        <h1>Innovating the <span class="text-accent">Future</span> of Social Technology</h1>
        <p>Lightningware is a next-generation software publisher creating social technology that redefines how people connect. We develop groundbreaking applications, designed to spark real conversations and foster meaningful interactions.</p>
        <Button class="bg-background-dk text-text-lt hover:bg-accent hover:text-text-dk" />
    </div>
    <!-- child 2 -->
    <div class="w-full max-w-lg"><Globe /></div>
</div>


<!-- Avatar Container -->
<div class="avatar-container flex  items-center gap-4 mt-10 body-width">
    <div class="avatars  flex items-center ">
        {#each avatars as avatar, index (avatar.src)}
            <img
                src={avatar.src}
                alt={avatar.alt}
                class={`rounded-4xl h-12 w-12 ${index > 0 ? '-ml-3 border-border-dk border-3' : ' border-3 border-background-dk'} `}
            >
        {/each}
    </div>
    <p>8M+ Monthly Users</p>
</div>


<!-- About Section -->
<div class="mt-20 py-30 px-5 flex flex-col  text-center bg-background">
    <div class="body-width md:px-30">   
        <p class="text-2xl font-heading tracking-wide text-accent">What we do</p>
        <h1 class="mb-10">About <span class="text-accent">Lightningware</span></h1>
        <p class='text-xl max-w-300 mx-auto mb-20'>We’re not an agency. We don’t build software for clients. We create and launch our own products, shaping the future of digital interactions. 
            <br><br>
            With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what’s possible.</p>
        <Button link="/about" text="Why we do it" />
    </div>
</div>
 

<!-- Info section -->
 <div class="body-width">
    <div class="md:py-30 px-5 flex flex-wrap gap-10 text-center bg-background-dk">
        <div class="md:max-w-200 text-left">   
            <p class="text-2xl font-heading tracking-wide text-accent">Thundr</p>
            <h1 class="mb-10">A human search engine for real <span class="text-accent">connections</span></h1>
            <p class='text-xl max-w-300 mx-auto mb-20'>Thundr is a revolutionary social platform that allows users to meet and talk to new people worldwide. With AI-powered moderation and a seamless user experience, Thundr makes conversations effortless, safe, and engaging.</p>
            <div class="grid grid-cols-2 gap-10 max-w-105">
                <div class="border-r-accent border-r-2">
                    <h1>8M+</h1>
                    <p>Monthly Visits</p>
                </div>
                <div>
                    <h1>81 k+</h1>
                    <p>Daily Visits</p>
                </div>
                <Button link="/products" text="Our Products"/>
            </div>
        </div>
        <div>
            <img src="/thundr-phone.png" alt="Thundr Screenshot" class="w-auto">
        </div>
    </div>
 </div>


<!-- Circle section -->
<div class="backgroundCircle relative mx-auto px-5 max-w-250 flex flex-col items-center text-center overflow-visible bg-[url('/gold-circle.png')] bg-no-repeat bg-center bg-contain bg-background-dk">
    <div class="backgroundCircleDesat absolute inset-0 bg-background-dk/50"></div>

    <div class="body-width flex flex-col gap-15 md:gap-0 items-center z-10">   
        <Card icon="02-virtual-reality_1.gif" title="AI" description="Revolutionizing digital interaction with immersive technologies like AI" iconClass="overflow-visible" cardClass="order-2 md:order-first"/>

        <div>
            <p class="md:m-20 text-4xl leading-normal font-normal max-w-150 text-white ">We’re just getting started. Our roadmap includes bold ventures into <span class="text-accent">social entertainment</span>.</p>
        </div>

        <div class="flex flex-col gap-15 md:gap-0 md:flex-row place-content-between w-full items-center">
            <Card icon="11-love.gif" title="Dating" description="Redefining modern romance through innovative dating inititives"/>
            <Card icon="21-3D_1.gif" title="And more" description="And more innovative solutions are on the horizon, reshaping the future of connections"/>
        </div>
    </div>
</div>

<!-- call to action -->
<CallToAction />