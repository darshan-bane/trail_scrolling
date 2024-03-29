// gsap.to("#fanta", {
//     rotate: -15,
//     scrollTrigger: {
//       trigger: "#fanta",
//       scroller: "#main",
//       start: "top 5%",
//       end: "top -416%",
//       scrub: true,
//       pin: true

//     }
//   })


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".sec2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "25%",
    pin: true
}, 'orange')

tl.to("#goli",{
    top: "200%",
    left: "50%",
    pin: true
}, 'orange')






var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".sec3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl2.to("#fanta",{
    top: "220%",
    left: "25%",
    pin: true
}, 'ad')

tl2.to("#goli",{
    top: "330%",
    left: "50%"
}, 'ad')





var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".sec4",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl3.to("#fanta",{
    top: "320%",
    left: "25%",
    pin: true
}, 'aa')

tl3.to("#goli",{
    top: "450%",
    left: "55%"
}, 'aa')




var tl4 = gsap.timeline({scrollTrigger:{
    trigger: ".sec5",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl4.to("#fanta",{
    top: "410%",
    left: "5%",
    pin: true
}, 'dd')
var tl5 = gsap.timeline({scrollTrigger:{
    trigger: ".sec5",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl5.to("#fanta",{
    top: "410%",
    left: "50%",
    delay: "3",
    pin: true
}, 'dd')



var tl6 = gsap.timeline({scrollTrigger:{
    trigger: ".sec6",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl6.to("#fanta",{
    top: "530%",
    left: "50%",
    delay: "0.1",
    pin: true
}, 'qw')
var tl7 = gsap.timeline({scrollTrigger:{
    trigger: ".sec6",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl7.to("#fanta",{
    top: "520%",
    left: "-60%",
    delay: "1.5",
    pin: true
}, 'qw')














