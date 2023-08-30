// place files you want to import through the `$lib` alias in this folder.
export default function addToLocalStorage (title, url){
    let feedInLocalStorage = JSON.parse(localStorage.getItem("feeds")) || [];
    localStorage.setItem("feeds", JSON.stringify([...feedInLocalStorage, {title:title, url:url}]));
}