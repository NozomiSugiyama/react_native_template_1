const extentionToMimeType = {
  'img': 'image/jpeg',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'img': 'image/jpeg',
  'png': 'image/png',
}

export default fileName => {
  const x = fileName.split(".")
  const mimeType = extentionToMimeType[x[x.length - 1]]
  if (!mimeType) throw `${fileName}did not match MimeType`
  return mimeType
}
