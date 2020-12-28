import  { useState, useCallback, useRef,useEffect } from 'react';

export const useHttpClient = () => {
    const[isLoading,setIsLoading] = useState(false);
    const[error,setError] = useState();

    const activeHttpRequest = useRef([]);

    const sendRequest = useCallback( async (url, method='GET',body= null , headers={}) => {
        setIsLoading(true);
        const httpAbortControl = new AbortController();
        activeHttpRequest.current.push(httpAbortControl);

        try{
            const response = await fetch(url,{
                method,
                body,
                headers,
                signal: httpAbortControl.signal
            });
    
            const responseData = await response.json();

            activeHttpRequest.current = activeHttpRequest.current.filter(reqCtrl => reqCtrl !== httpAbortControl); 
    
            if(!response.ok){
                throw new Error(responseData.message);
            }

            setIsLoading(false);
            return responseData;

      }catch(err){
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
      
    },[]);

    //never continue with a request that have been triggered from a components and the component was changed before the requset completed
    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortctrl => abortctrl.abort());
        };
    },[]);
    return {isLoading, error, sendRequest};
};