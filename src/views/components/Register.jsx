const React = require('react');

module.exports = function Register() {
  return (
    <>
      <script defer src="/js/reg.js" />
      <div className="form-container">
        <form id="register-form" class="box">
          <div className="field">
            <label className="label">Имя</label>
            <div className="control">
              <input className="input" name="name" type="text" placeholder="Иванов Иван" required />
            </div>
          </div>
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
          {/* <div className="field">
      <label className="label">Subject</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Выберите роль</option>
            <option>Пациент</option>
            <option>Администратор</option>
            <option>Врач</option>
          </select>
        </div>
      </div>
    </div> */}
          {/* <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
    </div> */}
          {/* <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" />
          Есть ли у вас особое разрешение
        </label>
      </div>
    </div> */}
          <div className="field">
            <div className="control">
              <p>Есть ли у вас особое разрешение? </p>
              <label className="radio">
                <input type="radio" name="admin" value="false" checked />
                {' '}
                Пациент
              </label>
              <label className="radio">
                <input type="radio" name="admin" value="true" />
                {' '}
                Админ
              </label>
              <label className="radio">
                <input type="radio" name="admin" value="true" />
                {' '}
                Врач
              </label>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" type='submit'>Отправить</button>
            </div>
            {/* <div className="control">
              <button className="button is-link is-light">В</button>
            </div> */}
          </div>
        </form>
        <h3 className="msg"></h3>
      </div>
    </>
  );
};
