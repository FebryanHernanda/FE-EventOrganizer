import AuthLayout from "@/components/layouts/AuthLayout";
import LoginView from "@/components/views/Auth/Login";

const LoginPage = () => {
  return (
    <AuthLayout title="Acara | Login">
      <LoginView />
    </AuthLayout>
  );
};

export default LoginPage;
