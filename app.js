const p1 =document.querySelector(".p1")
const p2 =document.querySelector(".p2")
const p3 =document.querySelector(".p3")
const p4 =document.querySelector(".p4")
const py =document.querySelectorAll(".py")

console.log(py);

py.forEach((p, index) => {
    p.addEventListener('mouseover', () => {
        console.log(`c${index+1}`);
        document.querySelector(`.c${index+1}`).style.display = 'block';
    })

    p.addEventListener('mouseleave', () => {
        console.log(`c${index+1}`);
        document.querySelector(`.c${index+1}`).style.display = 'none';
    })
});


// p1.addEventListener('mouseover', () => {
//     console.log("p1")
//     document.querySelector('.c1').style.display = 'block';
// });

// p1.addEventListener('mouseleave', () => {
//     console.log("p1")
//     document.querySelector('.c1').style.display = 'none';
// });
