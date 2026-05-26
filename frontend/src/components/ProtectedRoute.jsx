import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}) {

  const token =
    localStorage.getItem("token");

  // IF NO TOKEN
  if (!token) {

    return (
      <Navigate to="/admin" />
    );
  }

  // IF TOKEN EXISTS
  return children;
}