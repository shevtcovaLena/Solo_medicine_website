const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');

module.exports = function Appoints({
  name, admin, userId, data,
}) {
  return (
    <Layout name={name}>
      <Register />
      <Login />
      <script defer src="/js/appoint.js" />
      {/* <div className="services columns is-multiline">
          {data?.map((el, index) => <Service key={el.id} title={el.title} text={el.text} num={index} id={el.id} />)}
        </div> */}
      <h2 className="title-appoint is-size-4-desktop">Доступная запись на 23.03.2024</h2>
      <table className="my-table table is-striped" user_id={userId} user_name={name}>
        <thead>
          <tr>
            <th>№</th>
            <th>Время приема</th>
            <th>Специалист</th>
            <th>Услуга</th>
            <th>Запись на прием</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr key={el.id} id={el.id}>
              <th>{index}</th>
              <td>{el.time}</td>
              <td>{el.doctor}</td>
              <td>{el.Service.title}</td>
              <td className="appoint_user">{(el.User) ? (el.User.name) : ''}</td>
              <td>
                {admin ? (el.User ? (<a className="delete-link">Отменить запись</a>) : (''))
                  : (<a className="appoint-link">Записаться</a>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
