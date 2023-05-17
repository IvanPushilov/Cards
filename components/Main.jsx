const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');
// const Form = require('./Form');

module.exports = function CardList({ cards, title, user }) {
  return (
    <Layout title={title}>
      <div className="Main">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* <Form /> */}
    </Layout>
  );
};
