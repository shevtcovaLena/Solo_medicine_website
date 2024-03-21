const React = require('react');

const Layout = require('./Layout');
const Register = require('./components/Register');
const Login = require('./components/Login');

module.exports = function Home({ name }) {
  return (
    <Layout name={name}>
      <Register />
      <Login />
      <h1>Hello world!</h1>
    </Layout>
  );
};
