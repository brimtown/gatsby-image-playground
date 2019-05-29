const transformImageData = (data, fixed = false) => {
  let mobileImage = data.mobileImage.childImageSharp.fluid
  let desktopImage = data.desktopImage.childImageSharp.fluid

  if (fixed) {
    mobileImage = data.mobileImage.childImageSharp.fixed
    desktopImage = data.desktopImage.childImageSharp.fixed
  }

  return [
    { ...mobileImage, media: `only screen and (max-width: 767px)` },
    { ...desktopImage, media: `only screen and (min-width: 768px)` },
  ]
}

export default transformImageData;
