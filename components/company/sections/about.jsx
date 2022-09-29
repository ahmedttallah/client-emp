import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../constants";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const [id, setId] = useState();

  // About Section Data comming from Backend.
  const [since, setSince] = useState();
  const [companyForm, setCompanyForm] = useState();
  const [status, setStatus] = useState();
  const [companyType, setCompanyType] = useState();
  const [staff, setStaff] = useState();
  const [capitalMoney, setCapitalMoney] = useState();
  const [currency, setCurrency] = useState();
  const [businessFields, setBusinessFields] = useState([]);
  const [sisterCompany, setSisterCompany] = useState([]);
  const [docs, setDocs] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [callCenter, setCallCenter] = useState([]);
  const [whatsApp, setWhatsApp] = useState([]);
  const [companyProfilePDF, setCompanyProfilePDf] = useState();
  const [currentAdress, setCurrentAddress] = useState();
  const [previousAddresses, setPreviousAddresses] = useState([]);

  useEffect(() => {
    var { profile } = router.query;
    setId(profile);

    const loadData = () => {
      axios
        .get(`${baseURL}/company/profile-data/about`, {
          params: { companyId: id },
        })
        .then((res) => {
          setSince(res.data.aboutData.since);
          setCompanyForm(res.data.aboutData.companyForm);
          setStatus(res.data.aboutData.status);
          setCompanyType(res.data.aboutData.companyType);
          setStaff(res.data.aboutData.staffNumber);
          setCapitalMoney(res.data.aboutData.capitalMoney);
          setCurrency(res.data.aboutData.currency);
          setBusinessFields(res.data.aboutData.businessFields);
          setSisterCompany(res.data.aboutData.sisterCompany);
          setDocs(res.data.aboutData.docs);
          setEmail(res.data.aboutData.email);
          setPhone(res.data.aboutData.phone);
          setCallCenter(res.data.aboutData.callCenter);
          setWhatsApp(res.data.aboutData.whatsApp);
          setCompanyProfilePDf(res.data.aboutData.companyProfilePDF);
          setCurrentAddress(res.data.aboutData.currentAdress);
          setPreviousAddresses(res.data.aboutData.previousAddresses);
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
      {/* Start of about section data */}
      <div className="container my-4 mx-auto px-4 md:px-12 text-indigo-800">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}

          {since ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Since
                    </div>
                    <p className="mt-2 text-slate-600">{since}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}
          {status ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Status
                    </div>
                    {status == "Active" ? (
                      <p className="mt-2 text-green-600"> {status} </p>
                    ) : (
                      <p className="mt-2 text-yellow-600"> {status} </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}
          {companyForm ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Company Form
                    </div>
                    <p className="mt-2 text-slate-600">{companyForm}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {companyType ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Company Type
                    </div>
                    <p className="mt-2 text-slate-600">{companyType}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {staff ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Staff Number
                    </div>
                    <p className="mt-2 text-slate-600">{staff}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {capitalMoney ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Paid Capital Money
                    </div>
                    <p className="mt-2 text-slate-600">
                      {capitalMoney} {currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {businessFields.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Business Fields
                    </div>
                    {businessFields.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-blue-600">
                          <a target="_blank" rel="noreferrer" href={item.link}>
                            {item.name}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {sisterCompany.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Sister Companies
                    </div>
                    {sisterCompany.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-blue-600">
                          <a target="_blank" rel="noreferrer" href={item.link}>
                            {item.name}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {docs.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Documents
                    </div>
                    {docs.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-blue-600">
                          <a target="_blank" rel="noreferrer" href="#">
                            {item}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {email.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Emails
                    </div>
                    {email.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {phone.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Phone
                    </div>
                    {phone.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {callCenter.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Call Center
                    </div>
                    {callCenter.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {whatsApp.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Whatsapp
                    </div>
                    {whatsApp.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {companyProfilePDF ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Company Profile PDF
                    </div>
                    <p className="mt-2 text-blue-600">
                      <a target="_blank" rel="noreferrer" href="#">
                        {companyProfilePDF}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {currentAdress ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Current Address
                    </div>
                    <p className="mt-2 text-slate-600">
                      {currentAdress.location}
                    </p>
                    <p className="mt-2 text-slate-600">
                      <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        From :{" "}
                      </span>{" "}
                      {currentAdress.from}
                    </p>
                    <p className="mt-2 text-slate-600">
                      <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        To :{" "}
                      </span>{" "}
                      {currentAdress.to}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {previousAddresses.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Previous Addresses
                    </div>
                    {previousAddresses.map(function (item, idx) {
                      return (
                        <span key={idx}>
                          <p className="mt-2 text-slate-600">
                            {previousAddresses.location}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              From :{" "}
                            </span>{" "}
                            {previousAddresses.from}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              To :{" "}
                            </span>{" "}
                            {previousAddresses.to}
                          </p>
                        </span>
                      );
                    })}
                  </div>
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

export default About;
