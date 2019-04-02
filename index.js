/**
 * Utility function to capitalize the keys of an object recursively
 */
export const capitalizeKeys = obj => {
	return Object.keys(obj).reduce((acc, key) => {
		const capitalizedKey = `${key.charAt(0).toUpperCase()}${key.slice(1)}`

		if (Array.isArray(obj[key])) {
			acc[capitalizedKey] = obj[key].map(capitalizeKeys);
			return acc;
		}
		if (typeof obj[key] === 'object') {
			acc[capitalizedKey] = capitalizeKeys(obj[key])
			return acc;
		}
		acc[capitalizedKey] = obj[key];
		return acc;
	}, {});
}
