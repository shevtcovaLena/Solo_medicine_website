const React = require('react');

module.exports = function Layout({ children, name }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bulma.css" />
        <script defer src="/js/application.js" />
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <title>МЦ Сфера</title>
      </head>
      <header className="shadow my-header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="/img/logo.png" width="212" height="60" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item main" href="/">
                Главная
              </a>

              <a className="navbar-item" href="/service">
                Услуги
              </a>

              <a className="navbar-item" href="/doctor">
                Специалисты
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Еще
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/appoint">
                    Запись
                  </a>
                  <a className="navbar-item">
                    Вакансии
                  </a>
                  <a className="navbar-item">
                    Отзывы
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" href="/contact">
                    Контакты
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  { !name ? (
                    <>
                      <a className="button is-primary is-light" id="login-btn">
                        <strong>Вход</strong>
                      </a>
                      <a className="button is-light" id="register-btn">
                        <strong>Регистрация</strong>
                      </a>
                    </>
                  ) : (
                    <>
                      <p className = "hello">{name}</p>
                      <a className="button is-light" href="/logout" id="exit-btn">
                        Выход
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <div className="landing-container">
          { children }
        </div>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" /> */}
      </body>
    </html>
  );
};
