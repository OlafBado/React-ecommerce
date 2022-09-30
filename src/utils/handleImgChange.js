
const prevImgHandler = (index, length) => {
        
    let newSlide = index === 0 ? length -1 : index -1;
    console.log(newSlide)
    return newSlide
}

export default prevImgHandler