const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function Main({ user, cards }) {
  return (
    <Layout user={user}>
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} mmm/>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
