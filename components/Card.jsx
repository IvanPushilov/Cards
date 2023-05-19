const React = require('react');
const { User } = require('../db/models');
function Card({ card, showButtons }) {
  return (
    <div className="ad-card mb-3" data-id={card.id} style={{ width: '740px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img alt='1' src={card.url} className="show-card img-fluid rounded-start" />
        </div>
        <div className="show-card col-md-8">
          <div className="card-body">
            <div className="show-card">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">{card.price}</p>
              <p className="card-text">{card.destruction}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  city {card.User.city}
                </small>
              </p>
              <button
              type="button"
              className="by-card btn btn-primary by-the-card"
            >
              KUPIT
            </button>
            </div>
          </div>
        </div>
        {showButtons && (
          <>
          
            <form className="edit-card mb-3" style={{ display: 'none' }}>
              <input name="name" defaultValue={card.name} />
              <input name="url" defaultValue={card.url} />
              <input name="price" defaultValue={card.price} />
              <input name="destruction" defaultValue={card.destruction} />

            </form>
            
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="show-Card btn btn-warning edit-ad"
              >
                edit
              </button>
              <button
                type="button"
                className="show-Card btn btn-danger button-delete"
              >
                delete
              </button>
            </div>
            <button
              type="button"
              className="edit-card btn btn-primary edit-ad-ok"
              style={{ display: 'none' }}
            >
              OK
            </button>

          </>
        )}
      </div>
    </div>
  );
}

module.exports = Card;
