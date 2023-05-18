const React = require("react");
const Layout = require("./Layout");

function RegisterPage() {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <form id="register-form">
        <div className="mb-3">
          <label htmlFor="exampleInputCity1" className="form-label">
            Город
          </label>
          <input
          required
            type="name"
            name="city"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="EmailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Имя
          </label>
          <input
          required
            type="name"
            name="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="EmailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
          required
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Повторить пароль
          </label>
          <input
          required
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <p id='log_err' className="hidden"></p>
        <button type="submit" className="btn btn-primary">
          Регистрация
        </button>
      </form>

      <script src="/js/register.js" />
    </Layout>
  );
}

module.exports = RegisterPage;
