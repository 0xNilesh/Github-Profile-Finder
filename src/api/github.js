import axios from "axios";

export default axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Authorization:
			"Client-ID cb4e9d7cbeafedee06df Client-Secret c0cc802e402e1a2c9ac59119f87c4b3ece10cfe1",
	},
});
