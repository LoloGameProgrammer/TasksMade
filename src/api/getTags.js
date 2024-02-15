export const getAllTags = async () => {
    const URL_TAGS =
        "https://api.github.com/repos/InvernaderoVR/InvernaderoVR/labels";

    const responseTags = await fetch(URL_TAGS, {
        headers: {
            'Authorization': '',
        }
    });
    const allTags = await responseTags.json();
    return await allTags
}

