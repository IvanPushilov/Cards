const React = require("react");

function Navbar({ user, data }) {
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
            <a href="/basket">
              <button type="button" className="btn btn-light">
                <img
                  className="cart__image"
                  src="https://w7.pngwing.com/pngs/13/220/png-transparent-shopping-cart-online-shopping-e-commerce-sign-up-button-text-rectangle-black.png"
                  alt="Cart"
                />
                <div className="cart__num" id="cart_num">
                  data.length
                </div>
              </button>
            </a>
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
