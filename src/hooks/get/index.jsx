import axios from "axios";
import {useEffect, useState} from "react";
import {setDecrementLoading, setIncrementLoading} from "../../store/loading/actions/actions";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIncrementLoading()
            try {
                const {data} = await axios.get(`https://psi-back.onrender.com/psinous_app/api/${url}`);
                setData(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setDecrementLoading()
            }
        };

        fetchData()
    }, [url, setIncrementLoading, setDecrementLoading]);

    return {data};
};

export default useFetch;
