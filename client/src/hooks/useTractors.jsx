import { useEffect, useState } from "react";

const useTractors = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [tractors, setTractors] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/tractors")
        .then((res) => res.json())
        .then((data) => {
            // setIsLoading(false);
            // setTractors(data)
            console.log(data)
        })
    }, [])

  return { isLoading, tractors }
}

export default useTractors