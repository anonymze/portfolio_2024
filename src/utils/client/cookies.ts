export const getCookie = (cookie_name: string): string | null => {
	const cookies = window.document.cookie.split(";");

	for (let cookie of cookies) {
		const name = cookie.split("=");
		if (name[0] === cookie_name) return name[1]
	}

	return null;
}