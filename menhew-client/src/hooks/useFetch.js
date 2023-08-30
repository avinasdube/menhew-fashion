// a custom hook to fetch data from the database based on 
// provided (url)

import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.data)

            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData();
    }, [url]);

    return { data, isLoading, isError };
};

export default useFetch;