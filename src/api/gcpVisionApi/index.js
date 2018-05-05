import config from "../config"

export default async ({
  image,
  features
}) => {
  const response = await fetch(
    `${config.origin}/v1/images:annotate?key=${config.key}`,
    {
      method : "POST",
      body   : {
        image,
        features
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )

  if (!response.ok)
    throw response

  return await response.json()
}
