const React = require('react');

module.exports = function Doctor({
  id, name, doctor, profession, text, photo,
}) {
  return (
    <div className="column is-one-fifth card m-5 cell" id={id}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img
            src={photo}
            alt="Portriat"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {doctor}
            </p>
            <p className="subtitle is-6">{profession}</p>
          </div>
        </div>

        <div className="content">
          {text}
          {' '}
          {name ? (<a href="/appoint"> #Запись</a>) : (<br />)}
          {' '}
          <br />
        </div>
      </div>
    </div>
  );
};
