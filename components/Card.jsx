const React = require('react');
// const FormUpdate = require('./FormUpdate');

function Card({ card }) {
  return (
    <div
      className="card"
      data-id={card.id}
    >
      <div className='cardCard2' data-front="true">
        <div className="divImg">
          <img alt="alt" src={card.url} className={`img${card.id}`} />
        </div>
        <h2 className={`name${card.id}`}>{card.name}</h2>
        <p className={`author${card.price}`}>{card.price}</p>
        <p className={`desc${card.destruction}`}>{card.destruction}</p>
        {/* <button type="button" className="updatecard">
          Update
        </button>
        <button type="button" className="deletecard">
          Delete
        </button> */}
      </div>
      <FormUpdate card={card}/>
    </div>
  );
}