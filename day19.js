import axios from 'axios'

export async function fetchData() {

	try {
		const [titleResponse, imageResponse, bitcoinResponse] = await Promise.all([
			axios.get("https://jsonplaceholder.typicode.com/posts/1"), // Free API
			axios.get("https://dog.ceo/api/breeds/image/random"), // Free API
			axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json"), // Free API
		  ]);

		  return {
			  
			randomTitle: titleResponse.data.title, // Use response.data to access the data
			imageLink: imageResponse.data.message, // Use response.data to access the data
			bitcoinPrice: parseFloat(bitcoinResponse.data.bpi.USD.rate_float), // Parse the rate_float as a float
		};
		
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
fetchData()
  .then(data => {
    console.log(data);
  })

