const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');
const Doctor = require('./components/Service');

module.exports = function Doctors({ name, data }) {
  return (
    <Layout name={name}>
      <Register />
      <Login />
      <div className="services columns is-multiline">
        {data?.map((el, index) => <Doctor key={el.id} title={el.title} text={el.text} num={index} id={el.id} />)}
      </div>
    </Layout>
  );
};
