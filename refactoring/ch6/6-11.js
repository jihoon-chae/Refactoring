export function priceOrder(product, quantity, shippingMethod) {
  // priceOrder함수 보면 배송비 한눈에 알 수 있음
  // 기본제품 가격
  const basePrice = product.basePrice * quantity;

  // 할인가격 계산
  const discount = calculateDiscountedPrice(product, quantity);

  const shippingCost = calculateShippingCost(
    basePrice,
    quantity,
    shippingMethod
  );

  // 총 가격 계산
  return basePrice - discount + shippingCost;
}

function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  // 총배송비 계산(수량을 곱해서)
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
