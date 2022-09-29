import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../constants";
import { useRouter } from "next/router";

const Branches = () => {
  const router = useRouter();
  const [id, setId] = useState();

  // Branches Section Data comming from Backend.
  const [branches, setBranches] = useState([]);
  var location, from, to;

  useEffect(() => {
    var { profile } = router.query;
    setId(profile);

    const loadData = async () => {

      await axios
        .get(`${baseURL}/company/profile-data/branches`, {
          params: { companyId: id },
        })
        .then((res) => {
          setBranches(res.data.branchesData.branches);
        })
        .catch((err) => {
          if (err.response.data) console.log(err.response.data.msg);
          else console.log("Internal Server ERROR");
        });
    };
    if (id) loadData();
  }, [id, router.query]); // Fetch Data From Server

  return branches.length != 0
    ? branches.map(function (item, idx) {
        return (
          <div key={idx} className="bg-white p-3 shadow-sm rounded-sm">
            {/* Start of branches section data */}

            <div className="mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden">
              <div className="container my-4 mx-auto px-4 md:px-12 text-indigo-800">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                  {/* <!-- Column --> */}

                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                      <div className="md:flex">
                        <div className="p-8">
                          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Current Address
                          </div>
                          <p className="mt-2 text-slate-600">
                            {(location = item.currentAddress.location)}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              From :{" "}
                            </span>{" "}
                            {(from = item.currentAddress.from)}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              To :{" "}
                            </span>{" "}
                            {(to = item.currentAddress.to)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End of Column */}

                  {/* <!-- Column --> */}

                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                      <div className="md:flex">
                        {item.mainStructure.map(function (item, idx) {
                          return (
                            <div key={idx} className="p-8">
                              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {item.structureType}
                              </div>

                              <p className="mt-2 text-slate-600">
                                {item.employee}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Column --> */}
                </div>
              </div>
            </div>
          </div>
        );
      })
    : "";
};

export default Branches;
