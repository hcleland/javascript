/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog" 

const article_headerEl = document.querySelector(".article__header")
console.log("element", article_headerEl);

article_headerEl.textContent = "Welcome to Heather's blog"

// article_headerEl.classList.add("fun")

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const article_headerEl2 = document.querySelectorAll(".article__header")
console.log("elements", article_headerEl2)
var i;
for (i = 0; i < article_headerEl2.length; i++) {
    article_headerEl2[i].classList.remove("article__header")
    article_headerEl2[i].classList.add("article_header_important")
}

customElements.forEach(header => {
    header.classList.add("forEach");
})

// Obtain a reference the element with a class of dashed and remove it.

const dashedEl = document.querySelector(".dashed")
console.log("dashed element", dashedEl);
dashedEl.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleFooterEl = document.querySelector(".article__footer")
console.log("article footer element", articleFooterEl);
articleFooterEl.classList.remove("article__footer")
articleFooterEl.classList.add("goldenrod")