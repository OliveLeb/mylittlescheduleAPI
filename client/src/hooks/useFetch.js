import { useEffect } from 'react'

export const useFetch = (axiosService, fetch, loading, fetchError, isLogged, data) => {

    useEffect(() => {
        let cancelRequest = false;
        if(!axiosService) return ;
        const fetchData = async () => {
            
            loading();

                try {
                    const result = await axiosService.get();
                    if (cancelRequest) return;
                    fetch(result);
                }
                catch(error) {
                    if (cancelRequest) return;
                    fetchError();
                }
        }

        if(isLogged && data.length === 0) fetchData();

        return function cleanup() {
			cancelRequest = true;
		};

    },[isLogged])


};
