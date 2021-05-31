import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

const useAxios = (requestParams) => {
  const [res, setRes] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const source = axios.CancelToken.source()
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

    return () => source.cancel()
  })

  return { loading, res, error }
}

export default useAxios