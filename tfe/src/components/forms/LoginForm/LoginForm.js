import React, { useState } from 'react';


function LoginForm() {
	const loginUrl = 'http://127.0.0.1:8000/auth/login';

	const [username, setUsername] = useState('');

	const [password, setPassword] = useState('');

	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (event) => {

		event.preventDefault();

		// Get the values from the form
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		// Create a request body
		const requestBody = {
			email:	 username,
			password:password
		};

		// Send a POST request to the backend for user authentication
		try {
			const response = await fetch(loginUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});

			//const response_json  = await response.json();
			//console.log(response_json);

			// Check if the request was successful
			if (response.ok) {
				// If the request was successful, redirect the user to the dashboard page
				const response_json  = await response.json();
				console.log(response_json);
				window.location.href = 'http://127.0.0.1:3001/';// пока с запуском дополнительно admin 
			} else {
				// If the request was not successful, display an error message
				alert('Error: Invalid username or password. Please try again.');
			}
		} catch (error) {
			// If there was an error with the request, display an error message
			alert('Error: Unable to authenticate user. Please try again.');
		}

	}


	return (
		<div className="login-wrap">
			<header className="login-pf-header">
				<div>
					<div>
						<div>
							<a href="#">English</a>
						</div>
					</div>
				</div>
				<h1>Авторизация</h1>
			</header>

			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">Логин</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
						/>
					</div>

					<div htmlFor="password">
						<label>Пароль</label>

						<input
							type={showPassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<button type="button" onClick={() => setShowPassword(!showPassword)}>
							Show Password
						</button>
					</div>
					<button type="submit">Войти</button>
				</form>
			</div>
		</div>
	);

}


export default LoginForm;