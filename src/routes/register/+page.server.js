import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const email = String(body.email);
		const password = String(body.password);

		const { error: err } = await locals.supabase.auth.signUp({
			email: email,
			password: password
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}

			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
