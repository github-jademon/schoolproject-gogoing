window.onload = () => {
  /* global kakao */
var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
var mapOption = {
  center: new kakao.maps.LatLng(36.30305957780879, 128.58504612201034),
  level: 3
};
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(36.30305957780879, 128.58504612201034);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커가 드래그 가능하도록 설정합니다 
marker.setDraggable(true);
}