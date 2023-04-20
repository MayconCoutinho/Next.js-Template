import axios from "axios";
import { BASE_URL } from "../constants";

export const Nome = async () => {
	try {
		const response = await axios.get(`${BASE_URL}`);
		return response.data;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error.response);
	}
};
