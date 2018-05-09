import config from "./config"

// https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate

export default async ({
  // https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate#AnnotateImageRequest
  requests
}) => {
  const response = await fetch(
    `${config.origin}/v1/images:annotate?key=${config.key}`,
    {
      method : "POST",
      body   : JSON.stringify({
        requests
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )

  console.log(await response.json())
  if (!response.ok)
    throw response

  return await response.json()
}
