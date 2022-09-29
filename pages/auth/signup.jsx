// import Link from "next/link";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { Dropdown } from "react-dropdown-now";
// import "react-dropdown-now/style.css";
// import { useState } from "react";
// import axios from "axios";
// import { baseURL } from "../../constants";
// import { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const router = useRouter();

//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [status, setStatus] = useState({ label: "Active", value: "Active" });
//   const [companyType, setCompanyType] = useState({
//     label: "Single",
//     value: "Single",
//   });
//   const [id, setId] = useState("");

//   // Form submit button
//   const submitForm = async (event) => {
//     event.preventDefault();

//     const formData = {
//       tradeName: event.target.trade_name.value,
//       email: event.target.email.value,
//       password: event.target.password.value,
//       capitalMoney: event.target.capital_money.value,
//       currency: event.target.currency.value,
//       status: status.value,
//       companyType: companyType.value,
//       phone: phoneNumber,
//     };

//     if (event.target.password.value != event.target.repeat_password.value) {
//       return toast.error(`Password doesn't match`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else if (!phoneNumber) {
//       return toast.error(`Phone Number Can't be Empty`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }

//     await axios
//       .post(`${baseURL}/company/signup`, formData)
//       .then((res) => {
//         setId = res.data.id;
//         toast.success(res.data.msg, {
//           position: toast.POSITION.TOP_CENTER,
//         });

//         // Empty input Fields
//         event.target.trade_name.value = "";
//         event.target.email.value = "";
//         event.target.password.value = "";
//         event.target.repeat_password.value = "";
//         event.target.capital_money.value = "";
//         event.target.currency.value = "";
//         setPhoneNumber("");

//         router.push("/");
//       })
//       .catch(function (error) {
//         if (error.response) {
//           toast.error(error.response.data.msg, {
//             position: toast.POSITION.TOP_CENTER,
//           });
//         } else {
//           toast(error.message);
//         }
//       });
//   };

//   return (
//     <div className="flex h-screen justify-center items-center  bg-gradient-to-r from-sky-500 to-indigo-500">
//       <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-8 lg:p-10 ">
//         <h5 className="text-4xl font-black text-gray-900 mx-8 sm:mx-40">
//           Sign Up to Emplopedia
//         </h5>

//         <form onSubmit={submitForm}>
//           <div className="relative z-0 mb-6 w-full group">
//             <input
//               type="text"
//               name="trade_name"
//               id="trade_name"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="trade_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Trade Name <span className="text-red-600">*</span>
//             </label>
//           </div>

//           <div className="relative z-0 mb-6 w-full group">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="email"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Email address <span className="text-red-600">*</span>
//             </label>
//           </div>
//           <div className="relative z-0 mb-6 w-full group">
//             <input
//               type="password"
//               name="password"
//               id="password"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//               minLength="8"
//             />
//             <label
//               htmlFor="password"
//               className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Password <span className="text-red-600">*</span>
//             </label>
//           </div>
//           <div className="relative z-0 mb-6 w-full group">
//             <input
//               type="password"
//               name="repeat_password"
//               id="repeat_password"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="repeat_password"
//               className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Confirm password <span className="text-red-600">*</span>
//             </label>
//           </div>
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full group">
//               <input
//                 type="text"
//                 name="capital_money"
//                 id="capital_money"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="capital_money"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Capital Money <span className="text-red-600">*</span>
//               </label>
//             </div>
//             <div className="relative z-0 mb-2 w-full group">
//               <input
//                 type="text"
//                 name="currency"
//                 id="currency"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="currency"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Currency <span className="text-red-600">*</span>
//               </label>
//               <p
//                 id="filled_success_help"
//                 className=" text-xs text-gray-600 "
//               >
//                 e.g. EGP, USD, EUR .etc
//               </p>
//             </div>
//           </div>

//           <div className="relative mb-2 w-full group">
//             <label className="font-medium  text-sm text-gray-500">
//               Status <span className="text-red-600">*</span>
//             </label>
//             <Dropdown
//               placeholder="Select an option"
//               name="status"
//               id="status"
//               className={
//                 status.value == "Active" ? "text-green-600 " : "text-yellow-500"
//               }
//               options={[
//                 "Active",
//                 "Inactive Permanently",
//                 "Inactive Temporarily",
//               ]}
//               value={status}
//               onChange={(status) => setStatus(status)}
//             />
//           </div>

//           <div className="relative mb-2 w-full group">
//             <label className="font-medium  text-sm text-gray-500 ">
//               Company Type <span className="text-red-600">*</span>
//             </label>
//             <Dropdown
//               name="company_type"
//               id="company_type"
//               placeholder="Select an option"
//               options={["Share", "Single", "Other"]}
//               value={companyType}
//               onChange={(companyType) => setCompanyType(companyType)}
//             />
//           </div>

//           <div className="relative z-0 mb-6  w-full group">
//             <label className="font-medium  text-sm text-gray-500">
//               Phone Number <span className="text-red-600">*</span>
//             </label>
//             <PhoneInput
//               required
//               name="phone"
//               id="phone"
//               country={"eg"}
//               enableSearch={true}
//               value={phoneNumber}
//               onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="sm:float-right	 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             Sign Up
//           </button>
//           <div className=" text-sm font-medium text-gray-500 mt-6">
//             Already have an account ?
//             <Link href="/auth/login">
//               <a className="text-blue-700 hover:underline pl-2">
//                 Login
//               </a>
//             </Link>
//           </div>
//         </form>
//         <ToastContainer autoClose={1000} />
//       </div>
//     </div>
//   );
// };

// export default Signup;
