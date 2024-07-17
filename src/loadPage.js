import "./style.css";

const initLoad = () => {
    //var cont = document.getElementById("content"); // returns as null - fix
    var wrapper = document.createElement("div");

    // Make wrapper for main content
    var title = document.createElement("h1");
    title.textContent = "Placeholder Cool Name";
    wrapper.appendChild(title);

    // 
    var pg = document.createElement("p");
    pg.textContent = "Lorem ipsum";
    wrapper.appendChild(pg);

    return wrapper;
}

export {initLoad};