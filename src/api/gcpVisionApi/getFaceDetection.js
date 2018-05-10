import request from "./request"

// https://cloud.google.com/vision/docs/detecting-faces

export default async ({
  // struct 
  // images : [{
  //   content: String
  //   uri    : String
  // }]
  images
}) => 
  (await request({
    requests: images.map(x => (
      {
        "image": {
          ...(
            x.content ? { "content": x.content }
          : x.uri     ? { "imageUri": x.uri }
          :             {}
          )
        },
        "features": [{
          "type": "FACE_DETECTION"
        }]
      }
    ))
  }))
    .responses
