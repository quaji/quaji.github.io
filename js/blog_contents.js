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
            
            const text = document.createElement("div");
            text.className = "articleText";
            text.textContent = item.text;
            
            article.appendChild(data);
            article.appendChild(text);


            if(item.photo){
                const photoCon = document.createElement("div");
                photoCon.className = "articlePhoto";
                const photo = document.createElement("img");
                photo.setAttribute("src",`media/${item.photo}`);
                photoCon.appendChild(photo);
                article.appendChild(photoCon);
            }


            list.appendChild(article);


        });

    })
    .catch(error => console.error("エラー:",error));
