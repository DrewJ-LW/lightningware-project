<script>
    import Button from '$lib/components/Button.svelte';
    import Globe from '$lib/components/Globe.svelte';
</script>
<div class="py-75 px-5 max-w-275 text-center grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start">
    <div class="flex flex-col items-start gap-6">
        <h1>Innovating the Future of Social Technology</h1>
        <p>Lightningware is a next-generation software publisher creating social technology that redefines how people connect. We develop groundbreaking applications, designed to spark real conversations and foster meaningful interactions.</p>
        <div ><Button /></div>
    </div>
    <div class="max-w-150 w-150"><Globe /></div>
</div>
<div class="avatar-container">
    <div class="avatars">
        <img src="/avatars/avatar1.jpg" alt="Avatar 1">
        <img src="/avatars/avatar2.jpg" alt="Avatar 2">
        <img src="/avatars/avatar3.jpg" alt="Avatar 3">        
    </div>
    <p>8M+ Monthly Users</p>
</div>

<div class="about">
    <h6>What we do</h6>
    <h2>About Lightningware</h2>
    <p>We’re not an agency. We don’t build software for clients. We create and launch our own products, shaping the future of digital interactions.</p>
    <p>With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what’s possible.</p>
</div>

<Button link="/about" text="Why we do it" />
