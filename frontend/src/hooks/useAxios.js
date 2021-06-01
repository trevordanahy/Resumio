import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

/* Hook used to fetch data.  Method can be attached in the request params. */

const useAxios = (requestParams) => {
  const [res, setRes] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const source = axios.CancelToken.source()

    const fetchData = async () => {
      try {
        const result = await axios.request({ ...requestParams, cancelToken: source.token })
        setRes(result.data)
      } catch (err) {
        if (axios.isCancel(err)) {
          return
        }
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => source.cancel()
  }, [])

  return { loading, res, error }
}

export default useAxios