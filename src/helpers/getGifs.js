export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=56v13mHgZyKLpCyl5PlMU4IUNGWRg8YN`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    // console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}