import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const email = String(body.email);
		const password = String(body.password);

		const { error: err } = await locals.supabase.auth.signInWithPassword({
			email: email,
			password: password
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				fail(400, {
					error: 'Invalid credentials'
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
