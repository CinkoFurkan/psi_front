import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data} = await axios.get(`https://psi-back.onrender.com/psinous_app/api/${url}`);
                setData(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [url]);

    return {data, loading};
};

export default useFetch;
