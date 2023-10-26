import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
	// Issue this Line Callback function 
					onClick={() => {
						// Use a callback function to increment by 3
						setNumber((prevNumber) => prevNumber + 3);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}

