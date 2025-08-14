export function getImageUrl(imageUrl: string) {
  if (!imageUrl || imageUrl.trim() === '') {
    return '/assets/noImage.svg'
  }
  return imageUrl
}