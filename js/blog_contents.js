fetch("json/blog.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const list = document.getElementById("blogContents");

        data.forEach(item => {
            const article = document.createElement("div");
            article.className = "articleCon";

            const data = document.createElement("div");
            data.className = "articleData";
            
            const title = document.createElement("div");
            title.className = "articleTitle";
            title.textContent = `${item.title}`;
            
            const date = document.createElement("div");
            date.className = "articleDate";
            date.textContent = `${item.year}.${item.month}.${item.day}`;
            
            data.appendChild(title);
            data.appendChild(date);
            

            const contentCon = document.createElement("div");
            

            const text = document.createElement("div");
            text.className = "articleText";
            // text.textContent = item.text;
            text.innerHTML = item.text;
            

            article.appendChild(data);
            contentCon.appendChild(text);

           
            if(item.photo){
                const photoCon = document.createElement("div");
                photoCon.className = "articlePhoto";
                const photo = document.createElement("img");
                photo.setAttribute("src",`media/${item.photo}`);
                photoCon.appendChild(photo);
                contentCon.appendChild(photoCon);
            }
            contentCon.hidden = true;
            article.appendChild(contentCon);
            
            const showMore = document.createElement("div");
            showMore.className = "showMore";
            showMore.textContent = "記事を読む↓";
    
            showMore.style.textDecoration = "underline";


            article.appendChild(showMore);


            list.appendChild(article);

            showMore.addEventListener("click",()=>{
                if(contentCon.hidden){
                    contentCon.hidden = false;
                    showMore.textContent = "記事を閉じる↑";
                    showMore.style.borderTop = "solid 0.1px gray";
                }else{
                    contentCon.hidden = true;
                    showMore.textContent = "記事を読む↓";
                    showMore.style.borderTop = "solid 0px gray";
                }
            });

            

        });

    })
    .catch(error => console.error("エラー:",error));

