const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');

module.exports = function Home({ name }) {
  return (
    <Layout name={name}>
      <div className="baner columns has-text-light has-text-weight-bold ">
        <div className="column is-one-third">
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
        </div>
      </div>
      <Register />
      <Login />
    </Layout>
  );
};
