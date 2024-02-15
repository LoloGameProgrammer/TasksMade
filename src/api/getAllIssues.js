export const getAllIssues = async () => {
    const URL = "https://api.github.com/repos/InvernaderoVR/InvernaderoVR/issues";

    const connectApi = await fetch(URL, {
        headers: {
            'Authorization': '',
        }
    });
    const issues = await connectApi.json();
    return await issues;
}