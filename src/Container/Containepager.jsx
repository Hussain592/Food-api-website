import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Containerpage() {
    const [data, setdata] = useState([]);
    const [fromdata, setformdata] = useState({ Heading: "", Paragraf: "" });
    const [editid, seteditid] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://6861266f8e74864084451241.mockapi.io/Banner");
            setdata(response.data);
        } catch (error) {
            console.error("Fetch Error", error);
        }
    };

    const handlevalue = (e) => {
        const { name, value } = e.target;
        setformdata({ ...fromdata, [name]: value });
    };

    const addbanner = async () => {
        if (!fromdata.Heading || !fromdata.Paragraf) {
            alert("Is ko fill karo");
            return;
        }
        try {
            await axios.post("https://6861266f8e74864084451241.mockapi.io/Banner", fromdata);
            toast.success("App ka data save ho gaya");
            setformdata({ Heading: "", Paragraf: "" });
            fetchData();
        } catch (error) {
            console.error("Post error", error);
            toast.error("Data post nahi hua");
        }
    };

    const updatebanner = async () => {
        if (!fromdata.Heading || !fromdata.Paragraf) {
            alert("Update ke liye dono fields bharna zaroori hai");
            return;
        }
        try {
            await axios.put(`https://6861266f8e74864084451241.mockapi.io/Banner/${editid}`, fromdata);
            toast.success("Data update ho gaya");
            setformdata({ Heading: "", Paragraf: "" });
            seteditid(null);
            fetchData();
        } catch (error) {
            console.error("Update error", error);
            toast.error("Data update nahi hua");
        }
    };

    const deletebanner = async (_id) => {
        try {
            await axios.delete(`https://6861266f8e74864084451241.mockapi.io/Banner/${_id}`);
            toast.success("Data delete ho gaya");
            fetchData();
        } catch (error) {
            console.error("Delete error", error);
            toast.error("Data delete nahi hua");
        }
    };

    return (
        <>
            <div className="form-lable">
                <div className="add-form">
                    <h2>{editid ? "Update Banner" : "Add Banner"}</h2>
                    <input
                        type="text"
                        name="Heading"
                        placeholder="Heading"
                        value={fromdata.Heading}
                        onChange={handlevalue}
                    />
                    <input
                        type="text"
                        name="Paragraf"
                        placeholder="Paragraf"
                        value={fromdata.Paragraf}
                        onChange={handlevalue}
                    />
                    <button
                        className='updatebutton'
                        onClick={editid ? updatebanner : addbanner}
                    >
                        {editid ? "Update" : "Add"}
                    </button>
                </div>

                <table className='tableform'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Heading</th>
                            <th>Paragraf</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Heading}</td>
                                <td>{item.Paragraf}</td>
                                <td>
                                    <button
                                        className='btt'
                                        onClick={() => {
                                            seteditid(item.id);
                                            setformdata({
                                                Heading: item.Heading,
                                                Paragraf: item.Paragraf,
                                            });
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='hey'
                                        onClick={() => deletebanner(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Containerpage;
