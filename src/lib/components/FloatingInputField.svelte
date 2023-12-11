<script>
	/**
	 * @type {String}
	 */
	export let type;

	/**
	 * @type {String}
	 */
	export let id;

	/**
	 * @type {String}
	 */
	export let name;

	/**
	 * @type {String}
	 */
	export let label;

	/**
	 * @type {String}
	 */
	export let className = '';
</script>

<div class="relative">
	<input
		{type}
		{id}
		{name}
		class="{className} peer form-input w-64 rounded-md border border-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-0"
		placeholder=""
	/>
	<label
		for={id}
		class="absolute left-2 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:left-2 peer-focus:top-0 peer-focus:px-1 peer-focus:text-xs peer-focus:text-sky-500"
	>
		{label}
	</label>
</div>
