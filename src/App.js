import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [formValues, setFormValues] = React.useState({
        login: "",
        password: "",
        remember: true
    });
    const [formErrors, setFormErros] = React.useState({})

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
        validate(formData)
    }

    function validate(values) {
        debugger;
    }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <h2>Авторизация</h2>
          <label htmlFor="authorization-login">
                Логин
                <input onChange={onChange} value={formValues.login} placeholder="Логин" id="authorization-login" type='text' name="login" />
          </label>
          <label htmlFor="authorization-password">
              Пароль
              <input onChange={onChange} value={formValues.password} placeholder="Пароль" id="authorization-password" type="password" name="password" />
          </label>
          <label htmlFor="authorization-remember">
              <input onChange={onChange} checked={formValues.remember} id="authorization-remember" type="checkbox" name="remember" />
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
