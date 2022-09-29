import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../constants";
import { useRouter } from "next/router";
import Image from "next/image";
import Slideshow from "./Slideshow";

// SERVER DATA
let official_name = "Towebia Inc.";
let trade_name = "Towebia";

const LeftSide = () => {
  const router = useRouter();
  const [id, setId] = useState();

  // Profile Picture comming from Backend.
  const [profilePic, setProfilePic] = useState("/img/default.jpg");

  useEffect(() => {
    var { profile } = router.query;
    setId(profile);

    const loadData = async () => {
      await axios
        .get(`${baseURL}/company/profile-data/profile-pic`, {
          params: { companyId: id },
        })
        .then((res) => {
          setProfilePic(res.data.profilePicData.image);
        })
        .catch((err) => {
          if (err.response.data) console.log(err.response.data.msg);
          else console.log("Internal Server ERROR");
        });
    };
    if (id) loadData();
  }, [id, router.query]); // Fetch Data From Server

  return (
    <div className="w-full md:w-3/12 md:mx-2">
      {/* <!-- Profile Card --> */}

      <div className="bg-white p-3 border-t-4 border-inherit	mx-4">
        <div className="image overflow-hidden">
          {/* Profile Picature */}
          <Image
            className="h-auto w-full mx-auto"
            loader={() => profilePic}
            src={profilePic}
            crossOrigin="anonymous"
            alt="profile pic"
            width={512}
            height={512}
          />
        </div>

        {/* Trade Name */}
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {trade_name}
        </h1>

        {/* Official Name */}
        <h5 className="text-gray-600 font-lg text-semibold leading-6">
          {official_name}
        </h5>

        <hr className="my-5" />

        {/* Start of array of logos */}

        <Slideshow />

        {/* End of array of logos */}

        <hr className="my-5" />

        {/* Start of products */}
        {/* TODO:
          1 - Products "Will go to the product page".
        */}
        <h1 className="text-gray-900text-xl leading-8 my-1">Products</h1>
        <h1 className="text-sm textblue-900"> Coming Soon...</h1>

        {/* End of products */}
      </div>
      {/* <!-- End of profile card --> */}
      <div className="my-4"></div>
    </div>
  );
};

export default LeftSide;
