import { FormEvent, useState } from "react";

type InputDataType = {
	username: string;
	name: string;
	password: string;
};

const emptyInputData = {
	username: "",
	name: "",
	password: "",
};
export default function Home() {
	const [inputData, setInputData] = useState<InputDataType>(emptyInputData);

	const [returnedUniqueId, setReturnedUniqueId] = useState(null);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		let {uniqueId} = await fetch("api/insertUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputData),
		}).then((response) => response.json());

		setReturnedUniqueId(uniqueId);

		setInputData(emptyInputData);
	}
	return (
		<>
			<h3 className="text-xl text-center mt-3">
				Insert User into Database
			</h3>

			<form className="max-w-fit mx-auto rounded-md mt-8 px-8 py-4 flex flex-col gap-4 items-center justify-center bg-gray-200">
				<input
					type="text"
					id="username"
					value={inputData.username}
					className="rounded-md border border-black px-2 py-1 max-w-fit"
					placeholder="Username"
					onChange={(event) =>
						setInputData((input) => {
							return { ...input, username: event.target.value };
						})
					}
				/>

				<input
					type="text"
					id="name"
					className="rounded-md border border-black px-2 py-1 max-w-fit"
					placeholder="Name"
					value={inputData.name}
					onChange={(event) =>
						setInputData((input) => {
							return { ...input, name: event.target.value };
						})
					}
				/>

				<input
					type="password"
					id="password"
					value={inputData.password}
					className="rounded-md border border-black px-2 py-1 max-w-fit"
					placeholder="Password"
					onChange={(event) =>
						setInputData((input) => {
							return { ...input, password: event.target.value };
						})
					}
				/>

				<button
					className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 py-2 rounded-md"
					id="submitBtn"
					onClick={(event) => handleSubmit(event)}
				>
					Get uniqueId
				</button>
			</form>

			{/* A ULID generated Id should be printed to the screen when the data is sent */}
			<p id="uniqueId" className="text-center mt-6 font-bold font-mono">
				{returnedUniqueId}
			</p>
		</>
	);
}
