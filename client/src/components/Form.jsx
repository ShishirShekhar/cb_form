import { useState } from "react";
import axios from "axios";

const Form = () => {
    const domains = ["Technical team", "Graphic designing & Video editing", 
                    "Social media & Content writing", "Event management & Marketing",
                    "Public Speaking"];

    const [Name, setName] = useState("");
    const [Dob, setDob] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Whatsapp, setWhatsapp] = useState("");
    const [Branch, setBranch] = useState("B.Tech CSE");
    const [Reg, setReg] = useState("");
    const [Year, setYear] = useState("");
    const [Domain, setDomain] = useState(domains[0]);
    const [Reason, setReason] = useState("");

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

        axios.post("http://localhost:3000/submit", data)
        .then(res => console.log(res))
        .catch(e => console.log(e));  
    }

    return (
        <form onSubmit={ handleSubmit } className="top-1/2 translate-x-2/4">
            <div className="flex flex-col">
                <label>
                    Name
                </label>
                <input type="text" value={ Name } 
                    onChange={(e) => setName(e.target.value)} 
                    id="name" required
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Email
                </label>
                <input type="email" value={ Email } 
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    DoB
                </label>
                <input type="date" value={ Dob } 
                    onChange={(e) => setDob(e.target.value)} 
                    id="dob" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Mobile
                </label>
                <input type="number" value={ Mobile } 
                    onChange={(e) => setMobile(e.target.value)} 
                    id="mobile" required
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Whatsapp
                </label>
                <input type="number" value={ Whatsapp } 
                    onChange={(e) => setWhatsapp(e.target.value)} 
                    id="whatsapp" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Branch
                </label>
                <input type="text" value={ Branch } 
                    onChange={(e) => setBranch(e.target.value)}
                    id="branch" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Year of Study
                </label>
                <input type="number" value={ Year } 
                    onChange={(e) => setYear(e.target.value)} 
                    id="year" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Registration No.
                </label>
                <input type="number" value={ Reg } 
                    onChange={(e) => setReg(e.target.value)}
                    id="reg" required 
                />
            </div>

            <div className="flex flex-col">
                <label>
                    Domain
                </label>
                <select value={Domain} 
                    onChange={(e) => setDomain(e.target.value)}
                    id="domain" required>
                    {
                        domains.map((value) => (
                            <option value={ value } key={ value }>
                                { value }
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="flex flex-col">
                <label>
                    Why do you want to join CB?
                </label>
                <input type="text" value={ Reason } 
                    onChange={(e) => setReason(e.target.value)} 
                    id="reason" required
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};



export default Form;
