fetch(`https://source.unsplash.com/1600x900/?coding`)
    .then((response) => {   
    let backgroundImage = document.querySelector('body');
    backgroundImage.classList.add('item');
    backgroundImage.style.backgroundImage = `url("${response.url}")`   
    backgroundImage.style.backgroundAttachment = "fixed"  
    backgroundImage.style.backgroundSize = "100% 100%"
    document.append(backgroundImage);
}) 

