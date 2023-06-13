// export default function touchScroll (selector) {
//     const ele = document.querySelector(e.target.id);
//     let pos = { top: 0, left: 0, x: 0, y: 0 };
    
//     const mouseMoveHandler = function (e) {
//         const dx = e.clientX - pos.x;
//         const dy = e.clientY - pos.y;
    
//         ele.scrollTop = pos.top - dy;
//         ele.scrollLeft = pos.left - dx;
//     };

//     const mouseUpHandler = function () {
//         document.removeEventListener('mousemove', mouseMoveHandler);
//         document.removeEventListener('mouseup', mouseUpHandler);
    
//         ele.style.cursor = 'grab';
//         ele.style.removeProperty('user-select');
//     };

//     ele.style.cursor = 'grabbing';
//     ele.style.userSelect = 'none';

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
// }