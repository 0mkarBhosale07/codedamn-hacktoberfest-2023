// utils.js file code and no change in other files

function calculateDiscount(price, discount) {
	// Convert the discount to a decimal value (e.g., 10% to 0.10)
	const discountPercentage = parseFloat(discount) / 100;
  
	// Calculate the discounted price
	const discountedPrice = price - (price * discountPercentage);
  
	return discountedPrice;
  }
  

function formatCurrency(amount) {
	return `$${parseFloat(amount).toFixed(2)}`;
}
