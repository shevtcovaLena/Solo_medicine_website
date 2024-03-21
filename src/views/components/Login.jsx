const React = require('react');

module.exports = function Login() {
  return (
    <div className="form-container">
    <form id="login-form">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
        <label className="label">E-mail</label>
          <input className="input" type="email" placeholder="Email" />
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
          <input className="input" type="password" placeholder="Пароль" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      
      {/* <div className="field">
        <div className="control">
        <p>Есть ли у вас особое разрешение? </p>
          <label className="radio">
            <input type="radio" name="question" /> Админ
          </label>
          <label className="radio">
            <input type="radio" name="question" /> Врач
          </label>
        </div>
      </div> */}
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
  );
};
