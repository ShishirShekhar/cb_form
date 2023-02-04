import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const domains = [
    "Select Domain",
    "Technical team",
    "Graphic designing & Video editing",
    "Social media & Content writing",
    "Event management & Marketing",
    "Public Speaking",
  ];

  const [Name, setName] = useState("");
  const [Dob, setDob] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Whatsapp, setWhatsapp] = useState("");
  const [Branch, setBranch] = useState("");
  const [Reg, setReg] = useState("");
  const [Year, setYear] = useState("");
  const [Domain, setDomain] = useState(domains[0]);
  const [Reason, setReason] = useState("");
  const [Bold, setBold] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: Name,
      dob: Dob,
      email: Email,
      mobile: Mobile,
      whatsapp: Whatsapp,
      branch: Branch,
      reg: Reg,
      year: Year,
      domain: Domain,
      reason: Reason,
    };

    axios
      .post("http://localhost:3000/submit", data)
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        toast.success("Registration SuccessFull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setName("");
        setDob("");
        setEmail("");
        setMobile("");
        setWhatsapp("");

        setBranch("");
        setReg("");
        setYear("");
        setDomain(domains[0]);
        setReason("");
        setBold(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Please Try Again !!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold pb-4 text-white lg:text-black">
        CB Recruitment Form
      </h1>

      <div className="flex flex-col gap-2 items-center w-96">
        <input
          type="text"
          value={Name}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          value={Email}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          type="text"
          value={Dob}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setDob(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          placeholder="Date of Birth"
          required
        />

        <input
          type="number"
          value={Mobile}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Phone Number"
          required
        />

        <input
          type="number"
          value={Whatsapp}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp Number"
          required
        />

        <input
          type="text"
          value={Branch}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Branch of Study"
          required
        />

        <input
          type="number"
          value={Year}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setYear(e.target.value)}
          placeholder="Current Year"
          required
        />

        <input
          type="number"
          value={Reg}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setReg(e.target.value)}
          placeholder="Registration Number"
          required
        />

        <select
          value={Domain}
          className={`bg-gray-300 w-full rounded-xl px-3 py-2 ${
            Bold ? "font-bold" : ""
          } placeholder:font-normal placeholder-gray-700 focus:outline-none`}
          onChange={(e) => setDomain(e.target.value)}
          onFocus={() => setBold(true)}
          placeholder="Domain"
          required
        >
          {domains.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={Reason}
          className="bg-gray-300 w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none"
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason to join CodingBLocks LPU"
          required
        />

        <button
          type="submit"
          className="bg-primary rounded-xl px-3 py-4 w-full text-white font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
