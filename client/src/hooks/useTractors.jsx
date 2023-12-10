import { useEffect, useState } from "react";
import Request from "../Helpers/request";

const useTractors = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [tractors, setTractors] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const request = new Request

        const userPromise = request.get("http://localhost:3000/users")
        const tractorPromise = request.get("http://localhost:3000/tractors")

        Promise.all([userPromise, tractorPromise])
        .then((data) => {
            setIsLoading(false);
            setUsers(data[0]);
            setTractors(data[1])
        })
    }, [])

  return { isLoading, tractors, users }
}

export default useTractors