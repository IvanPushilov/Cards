const React = require('react');
const Layout = require('./Layout');

function LoginPage() {
  return (
    <Layout>
      <h1>Авторизация</h1>
      <form id="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Имя
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p className="hidden" id='error_message'>Неправильнй пароль, либо пользователь не существует!</p>
        <button type="submit" className="btn btn-primary">
          Вход
        </button>
      </form>

      <script src="/js/login.js" />
      
    </Layout>
  );
}

module.exports = LoginPage;
