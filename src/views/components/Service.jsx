const React = require('react');

module.exports = function Service({ title, text, num, id }) {
  return (
    <div class="service column is-half-tablet is-one-quarter-desktop">
    <div className="card" id={id}>
      <p className="subtitle my-num">
          { num+1 }
        </p>
        <div className="my-num next"></div>
      <div className="card-content">
        <p className="title">
          { title }
        </p>
        <p className="subtitle">
          { text }
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            {' '}
            <a href="#">Детали</a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            {' '}
            <a href="#">Записаться</a>
          </span>
        </p>
      </footer>
    </div>
    </div>
  );
};
