export const strContains =(title, searchString) => {
    console.log(title, searchString, title.toLowerCase().includes(searchString.toLowerCase()));
    title.toLowerCase().includes(searchString.toLowerCase())
}