const React = require("react");
const Layout = require("./Layout");
const Card = require("./Card");

function MyCardsPage({ user, cards }) {
  return (
    <Layout user={user}>
      <form className="mb-5" method="POST" action="/my-cards">
        Добавить карточку
        <div className="mb-3">
          <label htmlFor="text-input" className="form-label">
            Введите название
          </label>
          <input className="form-control" id="text-input" name="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="image-input" className="form-label">
            Изображение
          </label>
          <input className="form-control" id="image-input" name="image" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} showButtons />
        ))}
      </div>
      {/* <script src="/js/edit-cards.js" defer /> */}
    </Layout>
  );
}

module.exports = MyCardsPage;