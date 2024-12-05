import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sponsored() {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        axios
            .get("api/sponsor/")
            .then((response) => {
                setSponsors(response.data.sponsors || []);
            })
            .catch((error) => {
                console.error("Error fetching sponsor data:", error);
            });
    }, []);

    const sponsorWithIdOne = sponsors.find((sponsor) => sponsor.id === 1);
    const otherSponsors = sponsors.filter((sponsor) => sponsor.id !== 1);

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            {sponsorWithIdOne && (
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">İş Birlikçilerimiz</h2>
                    <p className="text-lg text-black leading-relaxed mx-auto text-justify">
                        {sponsorWithIdOne.text}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {otherSponsors.map((sponsor) => (
                    <div
                        key={sponsor.id}
                        className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                    >
                        {sponsor.image ? (
                            <img
                                src={sponsor.image}
                                alt={`Sponsor ${sponsor.id} logo`}
                                className="w-28 h-auto rounded-md"
                            />
                        ) : (
                            <p className="text-sm text-gray-400">Görsel yok</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
