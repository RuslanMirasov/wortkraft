const cropImageToSquare = imageFile => {
  return new Promise(resolve => {
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 400;

      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      const aspectRatio = img.width / img.height;
      let sx, sy, sWidth, sHeight;

      // Центрируем изображение (аналог cover)
      if (aspectRatio > 1) {
        sx = (img.width - img.height) / 2;
        sy = 0;
        sWidth = img.height;
        sHeight = img.height;
      } else {
        sx = 0;
        sy = (img.height - img.width) / 2;
        sWidth = img.width;
        sHeight = img.width;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, size, size);
      canvas.toBlob(blob => {
        resolve(new File([blob], imageFile.name, { type: imageFile.type }));
      }, imageFile.type);
    };
  });
};

export default cropImageToSquare;
