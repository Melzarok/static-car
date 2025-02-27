function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.4,
    lerp: 0.06,
    tablet: {
      smooth: true,
      multiplier: 0.45,
      lerp: 0.07,
    },
    smartphone: {
      smooth: true,
      multiplier: 0.45,
      lerp: 0.07,
    },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       ./video/frame_0001.png
       ./video/frame_0002.png
       ./video/frame_0003.png
       ./video/frame_0004.png
       ./video/frame_0005.png
       ./video/frame_0006.png
       ./video/frame_0007.png
       ./video/frame_0008.png
       ./video/frame_0009.png
       ./video/frame_0010.png
       ./video/frame_0011.png
       ./video/frame_0012.png
       ./video/frame_0013.png
       ./video/frame_0014.png
       ./video/frame_0015.png
       ./video/frame_0016.png
       ./video/frame_0017.png
       ./video/frame_0018.png
       ./video/frame_0019.png
       ./video/frame_0020.png
       ./video/frame_0021.png
       ./video/frame_0022.png
       ./video/frame_0023.png
       ./video/frame_0024.png
       ./video/frame_0025.png
       ./video/frame_0026.png
       ./video/frame_0027.png
       ./video/frame_0028.png
       ./video/frame_0029.png
       ./video/frame_0030.png
       ./video/frame_0031.png
       ./video/frame_0032.png
       ./video/frame_0033.png
       ./video/frame_0034.png
       ./video/frame_0035.png
       ./video/frame_0036.png
       ./video/frame_0037.png
       ./video/frame_0038.png
       ./video/frame_0039.png
       ./video/frame_0040.png
       ./video/frame_0041.png
       ./video/frame_0042.png
       ./video/frame_0043.png
       ./video/frame_0044.png
       ./video/frame_0045.png
       ./video/frame_0046.png
       ./video/frame_0047.png
       ./video/frame_0048.png
       ./video/frame_0049.png
       ./video/frame_0050.png
       ./video/frame_0051.png
       ./video/frame_0052.png
       ./video/frame_0053.png
       ./video/frame_0054.png
       ./video/frame_0055.png
       ./video/frame_0056.png
       ./video/frame_0057.png
       ./video/frame_0058.png
       ./video/frame_0059.png
       ./video/frame_0060.png
       ./video/frame_0061.png
       ./video/frame_0062.png
       ./video/frame_0063.png
       ./video/frame_0064.png
       ./video/frame_0065.png
       ./video/frame_0066.png
       ./video/frame_0067.png
       ./video/frame_0068.png
       ./video/frame_0069.png
       ./video/frame_0070.png
       ./video/frame_0071.png
       ./video/frame_0072.png
       ./video/frame_0073.png
       ./video/frame_0074.png
       ./video/frame_0075.png
       ./video/frame_0076.png
       ./video/frame_0077.png
       ./video/frame_0078.png
       ./video/frame_0079.png
       ./video/frame_0080.png
       ./video/frame_0081.png
       ./video/frame_0082.png
       ./video/frame_0083.png
       ./video/frame_0084.png
       ./video/frame_0085.png
       ./video/frame_0086.png
       ./video/frame_0087.png
       ./video/frame_0088.png
       ./video/frame_0089.png
       ./video/frame_0090.png
       ./video/frame_0091.png
       ./video/frame_0092.png
       ./video/frame_0093.png
       ./video/frame_0094.png
       ./video/frame_0095.png
       ./video/frame_0096.png
       ./video/frame_0097.png
       ./video/frame_0098.png
       ./video/frame_0099.png
       ./video/frame_0100.png
       ./video/frame_0101.png
       ./video/frame_0102.png
       ./video/frame_0103.png
       ./video/frame_0104.png
       ./video/frame_0105.png
       ./video/frame_0106.png
       ./video/frame_0107.png
       ./video/frame_0108.png
       ./video/frame_0109.png
       ./video/frame_0110.png
       ./video/frame_0111.png
       ./video/frame_0112.png
       ./video/frame_0113.png
       ./video/frame_0114.png
       ./video/frame_0115.png
       ./video/frame_0116.png
       ./video/frame_0117.png
       ./video/frame_0118.png
       ./video/frame_0119.png
       ./video/frame_0120.png
       ./video/frame_0121.png
       ./video/frame_0122.png
       ./video/frame_0123.png
       ./video/frame_0124.png
       ./video/frame_0125.png
       ./video/frame_0126.png
       ./video/frame_0127.png
       ./video/frame_0128.png
       ./video/frame_0129.png
       ./video/frame_0130.png
       ./video/frame_0131.png
       ./video/frame_0132.png
       ./video/frame_0133.png
       ./video/frame_0134.png
       ./video/frame_0135.png
       ./video/frame_0136.png
       ./video/frame_0137.png
       ./video/frame_0138.png
       ./video/frame_0139.png
       ./video/frame_0140.png
       ./video/frame_0141.png
       ./video/frame_0142.png
       ./video/frame_0143.png
       ./video/frame_0144.png
       ./video/frame_0145.png
       ./video/frame_0146.png
       ./video/frame_0147.png
       ./video/frame_0148.png
       ./video/frame_0149.png
       ./video/frame_0150.png
       ./video/frame_0151.png
       ./video/frame_0152.png
       ./video/frame_0153.png
       ./video/frame_0154.png
       ./video/frame_0155.png
       ./video/frame_0156.png
       ./video/frame_0157.png
       ./video/frame_0158.png
       ./video/frame_0159.png
       ./video/frame_0160.png
       ./video/frame_0161.png
       ./video/frame_0162.png
       ./video/frame_0163.png
       ./video/frame_0164.png
       ./video/frame_0165.png
       ./video/frame_0166.png
       ./video/frame_0167.png
       ./video/frame_0168.png
       ./video/frame_0169.png
       ./video/frame_0170.png
       ./video/frame_0171.png
       ./video/frame_0172.png
       ./video/frame_0173.png
       ./video/frame_0174.png
       ./video/frame_0175.png
       ./video/frame_0176.png
       ./video/frame_0177.png
       ./video/frame_0178.png
       ./video/frame_0179.png
       ./video/frame_0180.png
       ./video/frame_0181.png
       ./video/frame_0182.png
       ./video/frame_0183.png
       ./video/frame_0184.png
       ./video/frame_0185.png
       ./video/frame_0186.png
       ./video/frame_0187.png
       ./video/frame_0188.png
       ./video/frame_0189.png
       ./video/frame_0190.png
       ./video/frame_0191.png
       ./video/frame_0192.png
       ./video/frame_0193.png
       ./video/frame_0194.png
       ./video/frame_0195.png
       ./video/frame_0196.png
       ./video/frame_0197.png
       ./video/frame_0198.png
       ./video/frame_0199.png
       ./video/frame_0200.png
       ./video/frame_0201.png
   `;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.7,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.fromTo(
  "#page1>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page1",
      scroller: `#main`,
      start: "top 20%",
      end: "top 130%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

gsap.fromTo(
  "#page2>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: `#main`,
      start: "top 20%",
      end: "top 100%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

gsap.fromTo(
  "#page3>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: `#main`,
      start: "top 40%",
      end: "top 100%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

function initTextAnimations() {
  gsap.from("#loop .text h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#loop",
      scroller: "#main",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
  });

  gsap.from(".hero-description", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-description",
      scroller: "#main",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
  });

  const pages = ["#page1", "#page2", "#page3"];

  pages.forEach((page) => {
    gsap.from(`${page} .text-wrap h3`, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: `${page}`,
        scroller: "#main",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    gsap.from(`${page} .text-wrap p`, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: `${page}`,
        scroller: "#main",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  });
}

locomotive();
initTextAnimations();
