import axios from 'axios'
import { useEffect, useState } from 'react'

const CustomReactQuery = (url) => {
    console.log("Mounted..")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                if (error.request) {
                    setError("Something Went Wrong");
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        return () => fetchData();
    }, [])

    return { loading, error, data }
}
export default CustomReactQuery
