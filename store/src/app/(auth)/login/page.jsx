import LoginForm from "../../../modules/auth/login"

export const metadata = {
    title: `Store App | Login`,
  };

const index = () => {

  return (
    <main className="px-5 ">
     <LoginForm />
    </main>
  );
};

export default index;
