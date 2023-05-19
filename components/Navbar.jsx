const React = require("react");

function Navbar({ user }) {
  return (
    <ul className="nav justify-content-end">
      <h1 className="app-name">Magic-Cards</h1>
      {user ? (
        <>
          <li className="nav-item">
            <a className="nav-link disabled">Привет, {user.name}!</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              Главная
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/my-cards">
              Личный кабинет
            </a>
          </li>
          <li className="nav-item">
            <button className="cart" id="cart">
              <img className="cart__image" src="./images/cart.png" alt="Cart" />
              <div className="cart__num" id="cart_num">
                0
              </div>
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/logout">
              выход
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/auth/register">
              Регистрация
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/login">
              Вход
            </a>
          </li>
        </>
      )}
    </ul>
  );
}

module.exports = Navbar;
