<script>
	import FloatingInputField from '$lib/components/FloatingInputField.svelte';
</script>

<div class="grid h-screen w-screen place-items-center">
	<div class="grid">
		<a href="/">
			<h1 class="mb-5 text-center text-3xl font-bold italic text-sky-500 drop-shadow-md">OpenBO</h1>
		</a>

		<form action="?/register" method="POST" class="grid gap-y-3">
			<!-- <FloatingInputField type="text" id="fullname" label="Fullname"></FloatingInputField> -->
			<FloatingInputField type="email" name="email" id="email" label="Email"></FloatingInputField>
			<!-- <FloatingInputField  type="text" id="username" label="Username"></FloatingInputField> -->
			<FloatingInputField type="password" name="password" id="password" label="Password"
			></FloatingInputField>
			<button
				class="mt-3 w-fit place-self-center rounded-md bg-sky-500 px-4 py-2 text-white shadow-sm hover:bg-sky-600 active:bg-sky-700"
			>
				Register
			</button>
		</form>
	</div>
</div>
