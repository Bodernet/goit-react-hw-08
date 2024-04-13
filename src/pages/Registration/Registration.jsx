import { Helmet } from "react-helmet-async";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <div>
      <Helmet>
        <title>Registration Form</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
export default Registration;
