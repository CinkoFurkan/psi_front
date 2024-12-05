import Card from "../card";

export default function SingleTeam({ teamData }) {
    return (
        <div className="flex flex-wrap justify-center gap-10 p-5">
            {teamData?.team_infos?.length > 0 ? (
                teamData.team_infos.map((teamMember, index) => (
                    <Card
                        key={index}
                        image={teamMember.image}
                        description={teamMember.description}
                        title={teamMember.title}
                        reverse={index % 2 === 1} 
                    />
                ))
            ) : (
                <div>Loading team members...</div>
            )}
        </div>
    );
}
