const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');

module.exports = function Contact({ name }) {
  return (
    <Layout name={name}>
      <div className="contact-box columns">
        <div className="margin" />
        <div className="map-box column">
          <div className="columns has-text-light has-text-weight-bold ">
            <div className="column">
              <div className="card-content">
                <div>
                  <div>
                    <p className="my-title is-size-3-desktop">
                      Г. АНАПА
                    </p>
                    <p className="adress is-size-4-desktop">
                      ул.Парковая, 84
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (988) 66-72-000,</a>
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (988) 66-72-111</a>
                    </p>
                    <p className="adress is-size-4-desktop">
                      ст. Анапская, ул. Мира, 12
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (989) 766-6-222,</a>
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (989) 766-6-333</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="round" />
            </div>
          </div>
          <div className="map">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A52b77006afe7551861c6d73de78b0c541dcba7af112be5a06298ba1cb5f86fcc&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true" />
          </div>
        </div>
        <div className="map-box column">
          <div className="columns has-text-light has-text-weight-bold ">
            <div className="column">
              <div className="card-content">
                <div>
                  <div className="town">
                    <p className="my-title is-size-3-desktop">
                      Г. НОВОРОССИЙСК
                    </p>
                    <p className="adress is-size-4-desktop">
                      ул. Анапское шоссе, 53г
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (989) 826-21-11,</a>
                    </p>
                    <p className="is-size-5-desktop">
                      <a className="is-light" href="tel:+79898262111">+7 (989) 836-20-00</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="round" />
            </div>
          </div>
          <div className="map">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f6b3e4a8f0043614bed4e04ca47b800f70ea5d347ab86e39cc9a5bfc8086aee&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true" />
          </div>
        </div>
      </div>
      <Register />
      <Login />
    </Layout>
  );
};
