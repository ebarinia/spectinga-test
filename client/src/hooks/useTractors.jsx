import { useEffect, useState } from "react";
import Request from "../Helpers/request";

const useTractors = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [tractors, setTractors] = useState(null);
    const [users, setUsers] = useState(null);
    const [locales, setLocales] = useState(null);

    useEffect(() => {
        const request = new Request

        const userPromise = request.get("http://localhost:3000/users")
        const tractorPromise = request.get("http://localhost:3000/tractors")
        const localesPromise = request.get("http://localhost:3000/locales")

        Promise.all([userPromise, tractorPromise, localesPromise])
        .then((data) => {
            setIsLoading(false);
            setUsers(data[0]);
            setTractors(data[1])
            setLocales(data[2])
        })
    }, [])

  return { isLoading, tractors, users, locales }
}

export default useTractors