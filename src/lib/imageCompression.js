export const MAX_IMAGE_FILE_SIZE = 20 * 1024 * 1024;
const DEFAULT_TARGET_BYTES = 900000;
const INITIAL_MAX_DIMENSION = 1400;
const MIN_MAX_DIMENSION = 320;
const INITIAL_QUALITY = 0.82;
const MIN_QUALITY = 0.18;

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.readAsDataURL(file);
  });

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Failed to load image'));
    image.src = src;
  });

const getScaledDimensions = (image, maxDimension) => {
  const ratio = Math.min(maxDimension / image.width, maxDimension / image.height, 1);

  return {
    width: Math.max(1, Math.round(image.width * ratio)),
    height: Math.max(1, Math.round(image.height * ratio)),
  };
};

const renderCompressedImage = (image, maxDimension, quality) => {
  const { width, height } = getScaledDimensions(image, maxDimension);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Failed to process image');
  }

  canvas.width = width;
  canvas.height = height;

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  return canvas.toDataURL('image/jpeg', quality);
};

export const compressImageToFirestoreLimit = async (file, options = {}) => {
  const maxFileSize = options.maxFileSize ?? MAX_IMAGE_FILE_SIZE;
  const targetBytes = options.targetBytes ?? DEFAULT_TARGET_BYTES;
  const initialMaxDimension = options.initialMaxDimension ?? INITIAL_MAX_DIMENSION;
  const minMaxDimension = options.minMaxDimension ?? MIN_MAX_DIMENSION;
  const initialQuality = options.initialQuality ?? INITIAL_QUALITY;
  const minQuality = options.minQuality ?? MIN_QUALITY;

  if (!file) {
    throw new Error('Please choose an image');
  }

  if (file.size > maxFileSize) {
    throw new Error('File size must be under 5MB');
  }

  const source = await readFileAsDataUrl(file);
  const image = await loadImage(source);

  let maxDimension = initialMaxDimension;
  let quality = initialQuality;
  let result = '';

  for (let attempt = 0; attempt < 18; attempt += 1) {
    result = renderCompressedImage(image, maxDimension, quality);

    if (result.length <= targetBytes) {
      return result;
    }

    if (quality > 0.32) {
      quality = Math.max(Number((quality - 0.12).toFixed(2)), 0.32);
    } else {
      maxDimension = Math.max(Math.round(maxDimension * 0.82), minMaxDimension);
      quality = Math.max(Number((quality - 0.05).toFixed(2)), minQuality);
    }
  }

  result = renderCompressedImage(image, minMaxDimension, minQuality);

  if (result.length <= targetBytes) {
    return result;
  }

  throw new Error('This image is too detailed to upload. Please choose another image under 5MB.');
};