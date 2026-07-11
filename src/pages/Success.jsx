import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-5">
      <div className="max-w-md w-full text-center border rounded-xl shadow-lg p-8">

        <CheckCircle
          size={80}
          className="mx-auto text-green-500 mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with us.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          Redirecting to Home in <strong>5 seconds...</strong>
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Go Home Now
        </Link>

      </div>
    </div>
  );
};

export default Success;