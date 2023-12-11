<script>
	import FloatingInputField from '$lib/components/FloatingInputField.svelte';
</script>

<div class="grid h-screen w-screen place-items-center">
	<div class="grid gap-y-3">
		<h1 class="mb-5 text-center text-3xl font-bold italic text-sky-500 drop-shadow-md">OpenBO</h1>

		<div>
			<div class="grid gap-y-3">
				<FloatingInputField type="text" id="username" label="Username"></FloatingInputField>
				<FloatingInputField type="password" id="password" label="Password"></FloatingInputField>
			</div>
			<a href="/forgot-password" class="float-right text-sm text-sky-500">Forgot pasword?</a>
		</div>

		<button
			class="mt-2 w-fit place-self-center rounded-md bg-sky-500 px-4 py-2 text-white shadow-sm hover:bg-sky-600 active:bg-sky-700"
		>
			Login
		</button>
	</div>
</div>
