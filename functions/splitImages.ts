export const splitImages = (images: string) => {
  const splitedImages = images.split(',').map((url: string) => url.trim())
  return splitedImages
}