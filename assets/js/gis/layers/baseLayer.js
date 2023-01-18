// 지도 호출
export const baseLayer = new ol.layer.Tile({
    title: 'VWorld Gray Map',
    visible: true,
    type: 'base',
    source: new ol.source.XYZ({
        url: 'http://xdworld.vworld.kr:8080/2d/Base/201612/{z}/{x}/{y}.png'
    })
});