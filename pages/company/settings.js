import SettingsComponent from "../../components/company/SettingsComponent";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../constants";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      // checks if the user is authenticated
      const token = getCookie("x-access-token");
      await axios
        .get(`${baseURL}/verify-token`, {
          headers: { "x-access-token": token },
        })
        .catch(function (error) {
          if (error.response) {
            router.push("/auth/login");
          } else {
            toast.error(error.message);
          }
        });
    };
    loadData();
  }, [router]); // Ensure Auth

  return (
    <div className="h-full flex justify-center">
      <SettingsComponent />
    </div>
  );
};

export default Settings;
