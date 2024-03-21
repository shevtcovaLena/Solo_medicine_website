const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');
const Service = require('./components/Service');

module.exports = function Servises({ name, data }) {
  return (
    <Layout name={name}>
      <Register />
      <Login />
      <div className="services columns is-multiline">
        {data?.map((el, index) => <Service key={el.id} title={el.title} text={el.text} num={index} id={el.id} />)}
      </div>
    </Layout>
  );
};
