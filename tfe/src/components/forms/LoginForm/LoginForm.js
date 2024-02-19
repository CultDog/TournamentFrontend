import React, { useState } from 'react';


function LoginForm() {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    // Вставить логику входа(когда бэк перепишется) ...

  }


  return (

    <div>

      <header class="login-pf-header">
        <div>
          <div>
                        
            <div>
              <a href="">English</a>
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