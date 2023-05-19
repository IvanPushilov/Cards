const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function Basket({ user, cards }) {
  return (
    <Layout user={user}>
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
      <script src="/js/edit-cards.js" defer />
    </Layout>
  );
}

module.exports = Basket;
