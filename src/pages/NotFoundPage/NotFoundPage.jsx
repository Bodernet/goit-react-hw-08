import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <p>Sorry, but the page is not available!</p>
      <p>
        Start with <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
