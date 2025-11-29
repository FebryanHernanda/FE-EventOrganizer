import AuthLayout from "@/components/layouts/AuthLayout";
import ActivationFailedView from "@/components/views/Auth/Activation/failed";

const ActivateFailedPage = () => {
  return (
    <AuthLayout title="Acara | Activation Failed">
      <ActivationFailedView />
    </AuthLayout>
  );
};

export default ActivateFailedPage;
