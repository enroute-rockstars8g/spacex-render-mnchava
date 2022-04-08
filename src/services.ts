export const getRockets = async () => {
	try {
		const response = await fetch(`https://api.spacex.land/rest/rockets`);

		if (response.status !== 200) return {};

		return await response.json();
	} catch (error) {
		
	}
}

export const getShips = async () => {
	try {
		const response = await fetch(`https://api.spacex.land/rest/ships`);

		if (response.status !== 200) return {};

		return await response.json();
	} catch (error) {
		
	}
}