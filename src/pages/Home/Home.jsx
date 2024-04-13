import { Helmet } from "react-helmet-async";

// import css from './Home.module.css';
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home phonebook</title>
      </Helmet>
      <p>Welcome to your phonebook!</p>
    </div>
  );
};

export default Home;
