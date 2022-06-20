import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [formData, setFormData] = React.useState({
        login: "",
        password: "",
        remember: true
    });

    function onChange(event) {
        const {name, value, type, checked} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function onSubmit(event) {
        debugger;
    }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <h2>Авторизация</h2>
          <label for="authorization-login">
                Логин
                <input onChange={onChange} value={formData.login} placeholder="Логин" id="authorization-login" type='text' name="login" />
          </label>
          <label for="authorization-password">
              Пароль
              <input onChange={onChange} value={formData.password} placeholder="Пароль" id="authorization-password" type="password" name="password" />
          </label>
          <label for="authorization-remember">
              <input onChange={onChange} checked={formData.remember} id="authorization-remember" type="checkbox" name="remember" />
              <span>Запомнить меня</span>
          </label>
          <button>
              Войти
          </button>
      </form>
    </div>
  );
}

export default App;
