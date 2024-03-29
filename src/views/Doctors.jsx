const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');
const Doctor = require('./components/Doctor');

module.exports = function Doctors({ name, data }) {
  return (
    <Layout name={name}>
      <Register />
      <Login />
      <div className="services columns is-multiline">
        {data.map((el) => (
          <Doctor
            key={el.id}
            id={el.id}
            name={name}
            doctor={el.name}
            profession={el.profession}
            text={el.text}
            service={el.Service.title}
            photo={el.photo}
          />
        ))}
      </div>
    </Layout>
  );
};
