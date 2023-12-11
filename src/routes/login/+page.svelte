<script>
	import FloatingInputField from '$lib/components/FloatingInputField.svelte';
</script>

<div class="grid h-screen w-screen place-items-center">
	<div class="grid gap-y-3">
		<a href="/">
			<h1 class="mb-5 text-center text-3xl font-bold italic text-sky-500 drop-shadow-md">OpenBO</h1>
		</a>

		<div>
			<form id="login-form" action="?/login" method="post" class="grid gap-y-3">
				<FloatingInputField type="email" name="email" id="email" label="Email"></FloatingInputField>
				<FloatingInputField type="password" name="password" id="password" label="Password"
				></FloatingInputField>
			</form>
			<a href="/forgot-password" class="float-right text-sm text-sky-500">Forgot pasword?</a>
		</div>

		<button
			form="login-form"
			class="mt-2 w-fit place-self-center rounded-md bg-sky-500 px-4 py-2 text-white shadow-sm hover:bg-sky-600 active:bg-sky-700"
		>
			Login
		</button>
	</div>
</div>
