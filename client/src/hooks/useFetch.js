import { useEffect, useRef } from 'react'

export const useFetch = (axiosService, fetch, loading, fetchError, isLogged) => {

    //const cache = useRef(null);

    useEffect(() => {
        let cancelRequest = false;
        if(!axiosService) return ;

        const fetchData = async () => {
            
            loading();

           /* if(cache.current[axiosService]) {
                const data = cache.current[axiosService];
                fetch(data);
                console.log(data)
                console.log(cache.current)
            }
            else {*/
                try {
                    const result = await axiosService.get();
                    //cache.current[axiosService] = result;
                    //console.log(cache.current[axiosService]);
                    if (cancelRequest) return;
                    fetch(result);
                }
                catch(error) {
                    if (cancelRequest) return;
                    fetchError();
                }
            //}
        }

        isLogged && fetchData();

        return function cleanup() {
			cancelRequest = true;
		};

    },[axiosService,isLogged])


};
