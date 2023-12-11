<script>
	import { enhance } from '$app/forms';
	export let data;
	$: ({ supabase, session } = data);

	/** @type {import('@sveltejs/kit').SubmitFunction} */
	const submitLogout = async ({ cancel }) => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<div>
	{#if session}
		<p>Welcome, {session.user.email}</p>
		<form action="/logout" method="post" use:enhance={submitLogout}>
			<button type="submit" class="rounded-md bg-sky-500 px-3 py-2 text-white">Logout</button>
		</form>
	{:else}
		<div class="mt-3 grid w-fit grid-flow-col gap-3">
			<a href="/register" class="w-fit rounded-md bg-sky-500 px-3 py-2 text-white">Register</a>
			<a href="/login" class="w-fit rounded-md bg-sky-500 px-3 py-2 text-white">Login</a>
		</div>
	{/if}
</div>
