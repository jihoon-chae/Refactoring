export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
// 굳이 basePrice에 anOrder.basePrice를 할당할 필요 없이 바로 리턴에서 해주면 됨