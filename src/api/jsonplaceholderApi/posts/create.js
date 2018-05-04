import config from "../config"

// struct of post object
// {
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }

export default async ({
  post
}) => {
  const response = await fetch(
    `${config.origin}/posts`,
    {
      method : "POST",
      body   : JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )
  console.log( await response.json(), 'debug point')

  if (!response.ok)
    throw response

  return await response.json()
}
