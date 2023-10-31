import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Team = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then((res) => res.json())
            .then((data) => {
                setTeam(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="px-[20px] md:px-[50px] lg:px-[100px] py-12">
            <div className="text-center md:w-1/2 mx-auto">
                <p className="text-xl text-orange-500 font-bold pb-1">Team</p>
                <h1 className="text-[45px] font-bold">Meet Our Team</h1>
                <p className="text-[16px] text-gray-400 font-semibold pt-4">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {team.map((teamMember, idx) => (
                        <div key={idx} className="">
                            <img className="rounded-lg mb-4" src={teamMember?.img} alt={teamMember?.name} />
                            <h1 className="pb-2 text-3xl text-gray-600 font-bold text-center">{teamMember?.name}</h1>
                            <h1 className="pb-4 text-center text-gray-500 font-semibold text-xl">{teamMember?.position}</h1>
                            <div className="flex gap-4 justify-center items-center">
                                <div className="bg-blue-700 text-white text-xl rounded-full p-2 hover:bg-blue-800">
                                    <Link to={teamMember.facebook}><FaFacebookF /></Link>
                                </div>
                                <div className="bg-blue-400 text-white text-xl rounded-full p-2 hover-bg-blue-600">
                                    <Link to={teamMember.twitter}><FaTwitter /></Link>
                                </div>
                                <div className="bg-blue-600 text-white text-xl rounded-full p-2 hover-bg-blue-800">
                                    <Link to={teamMember.linkedin}><FaLinkedinIn /></Link>
                                </div>
                                <div className="bg-pink-500 text-white text-xl rounded-full p-2 hover-bg-pink-600">
                                    <Link to={teamMember.instagram}><FaInstagram /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Team;
