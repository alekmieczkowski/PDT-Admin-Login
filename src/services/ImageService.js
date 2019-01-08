//photos always end in /s96-c/photo.jpg


export function returnHighResGoogleImage(imageUrl){

    return imageUrl.replace("s96-c", "s500-c")
}