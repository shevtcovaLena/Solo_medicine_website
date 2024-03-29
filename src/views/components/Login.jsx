const React = require('react');

module.exports = function Login() {
  return (
    <>
      <script defer src="/js/log.js" />
      <div className="form-container">
        <form id="login-form" class="box">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <label className="label">E-mail</label>
              <input className="input" type="email" placeholder="Email" name="email" required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <label className="label">Пароль</label>
              <input className="input" type="password" placeholder="Пароль" name="password" required />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" type="submit">Отправить</button>
            </div>
          </div>
        </form>
        <h3 className="msg"></h3>
      </div>
    </>
  );
};
