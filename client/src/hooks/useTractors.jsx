import { useEffect, useState } from "react";
import Request from "../Helpers/request";

const useTractors = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [tractors, setTractors] = useState(null);
    const [users, setUsers] = useState(null);
    const [locales, setLocales] = useState(null);
    const [shipping, setShipping] = useState(null);

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

            const userShippingLocales = data[0].map(user => {
                const userLocaleId = user.localeId;
                return data[2].find(locale => locale.id === userLocaleId);
            });
            setShipping(userShippingLocales);
        })
    }, [])

  return { isLoading, tractors, users, locales, shipping }
}

export default useTractors