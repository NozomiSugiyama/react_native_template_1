import config from "../config"

export default async args => {
  const {
    id
  } = args || {}

  const response = await fetch(
    id ? `${config.origin}/posts/${id}` : `${config.origin}/posts`,
    {
      method : "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )

  if (!response.ok)
    throw response

  return await response.json()
}
