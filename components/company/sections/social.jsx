import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../../constants";
import { useRouter } from "next/router";

const Social = () => {
  const router = useRouter();
  const [id, setId] = useState();

  // Social Section Data comming from Backend.
  const [websites, setWebsites] = useState([]);
  const [telegram, setTelegram] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [linkedin, setLinkedin] = useState();
  const [twitter, setTwitter] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [googlePlay, setGooglePlay] = useState([]);
  const [appStore, setAppStore] = useState([]);
  const [appGallery, setAppGallery] = useState([]);

  useEffect(() => {
    var { profile } = router.query;
    setId(profile);

    const loadData = async () => {
      await axios
        .get(`${baseURL}/company/profile-data/social`, {
          params: { companyId: id },
        })
        .then((res) => {
          setWebsites(res.data.socialData.websites);
          setTelegram(res.data.socialData.telegram);
          setFacebook(res.data.socialData.facebook);
          setLinkedin(res.data.socialData.linkedin);
          setTwitter(res.data.socialData.twitter);
          setInstagram(res.data.socialData.instagram);
          setYoutube(res.data.socialData.youtube);
          setGooglePlay(res.data.socialData.googlePlay);
          setAppStore(res.data.socialData.appStore);
          setAppGallery(res.data.socialData.appGallery);
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

          {websites.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Websites
                    </div>
                    {websites.map(function (item, idx) {
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
          {/* <!-- Column --> */}

          {telegram.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Telegram
                    </div>
                    {telegram.map(function (item, idx) {
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

          {facebook.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Facebook
                    </div>
                    {facebook.map(function (item, idx) {
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

          {linkedin ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      LinkedIn
                    </div>
                    <p className="mt-2 text-slate-600">{linkedin}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {twitter.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Twitter
                    </div>
                    {twitter.map(function (item, idx) {
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

          {instagram.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Instagram
                    </div>
                    {instagram.map(function (item, idx) {
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

          {youtube.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Youtube
                    </div>
                    {youtube.map(function (item, idx) {
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

          {googlePlay.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Google Play
                    </div>
                    {googlePlay.map(function (item, idx) {
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

          {appStore.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      App Store
                    </div>
                    {appStore.map(function (item, idx) {
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

          {appGallery.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      App Gallery
                    </div>
                    {appGallery.map(function (item, idx) {
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
        </div>
      </div>
    </div>
  );
};

export default Social;
