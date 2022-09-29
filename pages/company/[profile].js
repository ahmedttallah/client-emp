import MainSide from "../../components/company/main_side";
import LeftSide from "../../components/company/left_side";

const Profile = () => {
  // useEffect(() => {
  //   const loadData = async () => {
  //     // checks if the user is authenticated
  //     const token = getCookie("x-access-token");
  //     await axios
  //       .get(`${baseURL}/verify-token`, {
  //         headers: { "x-access-token": token },
  //       })
  //       .catch(function (error) {
  //         if (error.response) {
  //           router.push("/auth/login");
  //         } else {
  //           toast.error(error.message);
  //         }
  //       });
  //   };
  //   loadData();
  // }, []); // Ensure Auth

  return (
    <div className="conatainer p-5 h-full">
      <div className="md:flex no-wrap md:-mx-2 ">
        <LeftSide />
        <MainSide />
      </div>
    </div>
  );
};

export default Profile;
