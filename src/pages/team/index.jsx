import useFetch from "../../hooks/get";
import SingleTeam from "./components/singleTeam";
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";

const Team = () => {
    const {year} = useParams();
    const defaultYear = "2024-2025";
    const selectedYear = year ? year.substring(0, 4) : defaultYear.substring(0, 4);

    const {data} = useFetch("/member");
    const {data: teamsData} = useFetch("/team");

    if (!data || !teamsData) {
        return null;
    }

    const years = data.years?.filter((y) => y.year === selectedYear) || [];
    const sortedYears = years.map((yearData) => {
        const allMembers = yearData.members || [];
        const teams = allMembers.reduce((acc, member) => {
            if (!acc[member.team_id]) {
                acc[member.team_id] = {
                    title: member.title,
                    members: [],
                    position: member.position,
                };
            }
            acc[member.team_id].members.push(member);
            return acc;
        }, {});

        Object.entries(teams).forEach(([teamId, team]) => {
            const teamInfo = teamsData.team_infos.find((t) => t.title === team.title);
            if (teamInfo) {
                team.position = teamInfo.position;
            }
        });
        const sortedTeams = Object.entries(teams).sort((a, b) => a[1].position - b[1].position);
        return {
            year: yearData.year,
            sortedTeams,
        };
    });

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="p-10 text-center"
        >
            {sortedYears.map((yearData) => (
                <div key={yearData.year}>
                    {yearData.sortedTeams.map(([teamId, team]) => (
                        <SingleTeam key={teamId} title={team.title} members={team.members}/>
                    ))}
                </div>
            ))}
        </motion.div>
    );
};

export default Team;
