export function getFinalPrice(watch) {
  if (!watch || !watch.discount) return watch?.price || 0
  return Math.round(watch.price * (1 - watch.discount / 100))
}

export function getLineTotal(watch, quantity) {
  return getFinalPrice(watch) * quantity
}