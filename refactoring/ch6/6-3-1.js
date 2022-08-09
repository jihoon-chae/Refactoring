export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비

  const basePrice = order.quantity * order.itemPrice; // 수량과 가격의 곱
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}

// 긴 표현식은 잘게 잘라쓰는게 가독성이 더 좋음
