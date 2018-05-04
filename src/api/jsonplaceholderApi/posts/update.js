import config from "../config"

// struct of post object
// {
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }

export default async ({
  id,
  post
}) => {
  const response = await fetch(
    `${config.origin}/posts/${id}`,
    {
      method : "UPDATE",
      body   : JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )

  if (!response.ok)
    throw response

  return await response.json()
}
