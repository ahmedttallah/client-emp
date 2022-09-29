import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../constants";
import { useRouter } from "next/router";

const OutsourceAgency = () => {
  const router = useRouter();
  const [id, setId] = useState();
  const [outsource, setOutsource] = useState([]);

  useEffect(() => {
    var { profile } = router.query;
    setId(profile);

    const loadData = async () => {
      await axios
        .get(`${baseURL}/company/profile-data/outsource`, {
          params: { companyId: id },
        })
        .then((res) => {
          setOutsource(res.data.outsourceData.outsource);
        })
        .catch((err) => {
          if (err.response.data) console.log(err.response.data.msg);
          else console.log("Internal Server ERROR");
        });
    };
    if (id) loadData();
  }, [id, router.query]); // Fetch Data From Server

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      {/* Start of outsourcing agency section data */}
      <div className="container my-4 mx-auto px-4 md:px-12 text-indigo-800">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}

          {outsource.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  {outsource.map(function (item, idx) {
                    return (
                      <div key={idx} className="p-8">
                        <a
                          target="_blank"
                          href={item.link}
                          rel="noopener noreferrer"
                        >
                          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {item.name}

                            <svg
                              className="inline-block ml-1 text-indigo-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#6366F1"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <g fill="none" fillRule="evenodd">
                                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                              </g>
                            </svg>
                          </div>
                        </a>

                        <p className="mt-2 text-blue-600">{item.details}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}
        </div>
      </div>
    </div>
  );
};

export default OutsourceAgency;
