import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const Form = () => {
    const domains = ["Select Domain", "Technical team", "Graphic designing & Video editing", 
                    "Social media & Content writing", "Event management & Marketing",
                    "Public Speaking"];

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
            "name": Name,
            "dob": Dob,
            "email": Email,
            "mobile": Mobile,
            "whatsapp": Whatsapp,
            "branch": Branch,
            "reg": Reg,
            "year": Year,
            "domain": Domain,
            "reason": Reason
        };

        axios
        .post("http://localhost:3000/submit", data)
        .then((res) => {
            toast.success("Registration SuccessFull", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
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
    }

    return (
        <form onSubmit={ handleSubmit } className="flex flex-col items-center w-full py-10">
            <h1 className="text-3xl font-bold pb-4 text-white lg:text-primary">CB Recruitment Form</h1>

            <div className="flex flex-col gap-2 items-center w-80 sm:w-96">
                <input type="text" value={ Name } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"  
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Full Name" required
                />

                <input type="email" value={ Email } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" required 
                />

                <input type="text" value={ Dob } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setDob(e.target.value)} 
                    onFocus={(e) => (e.target.type = "date")} 
                    placeholder="Date of Birth" required
                />

                <input type="number" value={ Mobile } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setMobile(e.target.value)} 
                    placeholder="Phone Number" required
                />

                <input type="number" value={ Whatsapp } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setWhatsapp(e.target.value)} 
                    placeholder="WhatsApp Number" required 
                />

                <input type="text" value={ Branch } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="Branch of Study" required 
                />

                <input type="number" value={ Year } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setYear(e.target.value)} 
                    placeholder="Current Year" required 
                />

                <input type="number" value={ Reg } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setReg(e.target.value)}
                    placeholder="Registration Number" required 
                />

                <select value={Domain} 
                    className={`bg-white w-full rounded-xl px-3 py-2 ${Bold ? "font-bold" : ""} placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl`}
                    onChange={(e) => setDomain(e.target.value)}
                    onFocus={() => setBold(true)}
                    placeholder="Domain"  required>
                    {
                        domains.map((value) => (
                            <option value={ value } key={ value }>
                                { value }
                            </option>
                        ))
                    }
                </select>

                <input type="text" value={ Reason } 
                    className="bg-white w-full rounded-xl px-3 py-2 font-bold placeholder:font-normal placeholder-gray-700 focus:outline-none drop-shadow-xl"
                    onChange={(e) => setReason(e.target.value)} 
                    placeholder="Reason to join CodingBLocks LPU" required
                />

                <button type="submit"
                    className="bg-white sm:bg-primary rounded-xl px-3 py-4 w-full text-primary sm:text-white font-bold text-lg drop-shadow-xl"
                >
                    Submit
                </button>
            </div>
        </form>
    )
};



export default Form;
