const baseUrl = 'https://res.cloudinary.com/dkirqc8za/image/fetch';

Array.from(document.querySelectorAll('[data-bg]')).forEach(
  (image) => {
    const { clientWidth, clientHeight } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${
      100 * Math.round((clientWidth * pixelRatio) / 100)
    },h_${
      100 * Math.round((clientHeight * pixelRatio) / 100)
    },c_fill,g_auto,f_auto`;
    if (image.nodeName.toLowerCase() === 'img') {
      const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`;
      image.src = url;
    } else {
      Array.from(image.children).forEach((child) => {
        if (child.nodeName.toLowerCase() === 'source') {
          if (child.media) {
            const url = `${baseUrl}/w_924,h_619,c_fill,g_auto,f_auto/${image.dataset.bg}`;
            child.srcset = url;
          } else {
            const url = `${baseUrl}/w_400,h_400,c_fill,g_auto,f_auto/${image.dataset.bg}`;
            child.srcset = url;
          }
        } else {
          const url = `${baseUrl}/w_400,h_400,c_fill,g_auto,f_auto/${image.dataset.bg}`;
          child.src = url;
        }
      });
    }
    console.log(image.clientWidth);
  }
);
