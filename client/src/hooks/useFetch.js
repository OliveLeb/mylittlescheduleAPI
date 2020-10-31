import { useEffect, useRef } from 'react'

export const useFetch = (axiosService, fetch, loading, fetchError, isLogged) => {

    const cache = useRef({});
    useEffect(() => {

        const fetchData = async () => {
            loading();

            if(cache.current[axiosService]) {
                const data = cache.current[axiosService];
                fetch(data);
                console.log(data)
            }
            else {
                try {
                    const result = await axiosService.get();
                    cache.current[axiosService] = result;
                    fetch(result);
                }
                catch(error) {
                    fetchError();
                }
            }
        }

        isLogged && fetchData();

    },[axiosService,isLogged])


};
