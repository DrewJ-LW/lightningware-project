<script>
    const { type = 'button', disabled = false } = $props();
</script>

<button
    type={type}
    disabled={disabled}
    class="inline-flex items-center justify-center px-8 py-3 font-semibold text-sm text-[#000A28] bg-[#FFC100] transition-colors duration-200 hover:bg-[#e6b201] focus:outline-none focus:ring-2 focus:ring-[#000A28] disabled:cursor-not-allowed disabled:opacity-50"
    style="clip-path: polygon(0 50%, 12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%);"
>
    <slot>Button</slot>
</button>