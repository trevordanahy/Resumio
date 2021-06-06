import React, {useEffect} from 'react'
import useAxios from '../../hooks/useAxios'

function LoadingPanel({method, requestUrl,requestBody, successCallback, errorCallback}) {
  const {res, error} = useAxios({
    url: requestUrl,
    method: method ,
    data: requestBody,
    withCredentials: true
  })

  useEffect(() => {
    if (res) {
      successCallback(res)
    }
    if (error){
      errorCallback(error)
    }
  }, [res, error, successCallback, errorCallback])

  return (
    <div>Loading ...</div>
  )
}

export default LoadingPanel
