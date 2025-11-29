import AuthLayout from "@/components/layouts/AuthLayout";
import NotActivatedView from "@/components/views/Auth/Activation/not-activate";

const NotActivationPage = () => {
  return (
    <AuthLayout title="Acara | Account Activation">
      <NotActivatedView />
    </AuthLayout>
  );
};

export default NotActivationPage;
