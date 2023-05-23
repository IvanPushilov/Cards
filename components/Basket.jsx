const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function Basket({ user, cards }) {
  return (
    <Layout user={user}>
      <div className="btn">
        {cards.map((card) => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
      <script src="/js/byCard.js" defer />
    </Layout>
  );
}

module.exports = Basket;
