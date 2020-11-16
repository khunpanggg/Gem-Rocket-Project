let section_1 = document.querySelector('#main').firstElementChild.children
// let section_2 = document.querySelector('.gypsum').firstElementChild.children
// let section_3 = document.querySelector('.calsite').firstElementChild.children
// let section_4 = document.querySelector('.fluorite').firstElementChild.children
// let section_5 = document.querySelector('.apatite').firstElementChild.children
// let section_6 = document.querySelector('.orthoclase').firstElementChild.children
// let section_7 = document.querySelector('.quartz').firstElementChild.children
// let section_8 = document.querySelector('.topaz').firstElementChild.children
// let section_9 = document.querySelector('.corundum').firstElementChild.children
let section_10 = document.querySelector('#tenth').firstElementChild.children

function tl1() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#main',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_1[0], {
        x: -1000,
    })
        .from(section_1[2], {
            x: -1000,
        })
        .from(section_1[1], {
            x: -1000,
        })
        .from(section_1[3], {
            x: -1000,
        })
}

function tl2() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#secondary',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        },
    });
    tl.from(section_2[0], {
        x: 1000,
    })
        .from(section_2[2], {
            x: 1000,
        })
        .from(section_2[1], {
            x: 1000,
        })
        .from(section_2[3], {
            x: 1000,
        })
}

function tl3() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#third',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_3[0], {
        x: -1000,
    })
        .from(section_3[2], {
            x: -1000,
        })
        .from(section_3[1], {
            x: -1000,
        })
        .from(section_3[3], {
            x: -1000,
        })
}

function tl4() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#fourth',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_4[0], {
        x: 1000,
    })
        .from(section_4[2], {
            x: 1000,
        })
        .from(section_4[1], {
            x: 1000,
        })
        .from(section_4[3], {
            x: 1000,
        })
}

function tl5() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#fifth',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_5[0], {
        x: -1000,

        duration: 0.1
    })
        .from(section_5[2], {
            x: -1000,

            duration: 0.1
        })
        .from(section_5[1], {
            x: -1000,

            duration: 0.1
        })
        .from(section_5[3], {
            x: -1000,

            duration: 0.1
        })
}


function tl6() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#sixth',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_6[0], {
        x: 1000,

        duration: 0.1
    })
        .from(section_6[2], {
            x: 1000,

            duration: 0.1
        })
        .from(section_6[1], {
            x: 1000,

            duration: 0.1
        })
        .from(section_6[3], {
            x: 1000,

            duration: 0.1
        })
}

function tl7() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#seventh',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_7[0], {
        x: -1000,

        duration: 0.1
    })
        .from(section_7[2], {
            x: -1000,

            duration: 0.1
        })
        .from(section_7[1], {
            x: -1000,

            duration: 0.1
        })
        .from(section_7[3], {
            x: -1000,

            duration: 0.1
        })
}

function tl8() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#eighth',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_8[0], {
        x: 1000,
    })
        .from(section_8[2], {
            x: 1000,
        })
        .from(section_8[1], {
            x: 1000,
        })
        .from(section_8[3], {
            x: 1000,
        })
}

function tl9() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#ninth',
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart"
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_9[0], {
        x: -1000,
    })
        .from(section_9[2], {
            x: -1000,
        })
        .from(section_9[1], {
            x: -1000,
        })
        .from(section_9[3], {
            x: -1000,
        })
}


function tl10() {
    var tl = gsap.timeline({
        scrollTrigger: {
            start: "top center",
            end: "top top",
            toggleActions: "play resume none restart",
            trigger: '#tenth',
        },
        default: {
            duration: 0.1
        }
    });
    tl.from(section_10[0], {
        x: 1000,
    })
        .from(section_10[2], {
            x: 1000,
        })
        .from(section_10[1], {
            x: 1000,
        })
        .from(section_10[3], {
            x: 1000,
        })
}

var master = gsap.timeline();
master.add(tl1())
    // .add(tl2())
    // .add(tl3())
    // .add(tl4())
    // .add(tl5())
    // .add(tl6())
    // .add(tl7())
    // .add(tl8())
    // .add(tl9())
    .add(tl10());
