export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
// 함수안에서 정말 필요한 데이터만 받아오기
// 전부다 받아오지 않고 state만 받아오기 
// 함수에서 필요로 하는것만 받아오기 => 외부의존도를 낮추고 재사용성 높이기