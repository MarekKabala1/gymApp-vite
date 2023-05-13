import { DbUserData, GetUserData } from "@/types/Types";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

export const fetchUserDataAfterLoggingInAuth0 = () => {
  const { user, isAuthenticated, isLoading }: GetUserData = useAuth0();
  (isAuthenticated && !isLoading ? user : undefined)
  if (undefined) {
    toast.error('Pls try again there was some problem to load User data')
  }
  return { user: user }
}
