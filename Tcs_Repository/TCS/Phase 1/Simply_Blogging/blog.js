        
        arrayData = new Object();
      
        arr = new Array();
       
        //this will show the pass posts
        function initBlog(){
            if (localStorage.getItem("localBlog")){
                let getBlog = localStorage.getItem("localBlog")           
                
                
                let blogJson = JSON.parse(getBlog);
                
                arrayData= blogJson;
                
                
                for (let i =0;i< arrayData.length; i++) { 
                    var a= document.getElementById("blogImage").getAttribute("src");
                    if(arrayData[i].titleObj== "" || a.charAt(0) == 'h' ){
                        console.log("loop "+i+" is blank")
                    }else{
                        postBlog(arrayData[i].titleObj , arrayData[i].articleObj, arrayData[i].imageObj);
                    }
                }
            }else{
                console.log("not in local storage")
            }
        }
        function getBlog() {
            var newTitle = document.getElementById('title').value;
             console.log("value of inputed title " + newTitle)

            var newArticle = document.getElementById('article').value;
            console.log("value of inputed article " + newArticle)

            var newImage = document.getElementById('image').value;
            console.log("value of inputed image url " + newImage)
           
            
            
           
         
           var arrayData = {
            length: 0,
        
                addElem: function addElem(elem) {
                    
                    arr.push.call(this, elem)
                }
            }
            
            var blogObj = {titleObj:newTitle, articleObj:newArticle, imageObj:newImage};
            
            
            arrayData.addElem(blogObj);
            
            
           
            localStorage.setItem("localBlog",JSON.stringify(arrayData))
            if (blogObj.titleObj == "" ){
                console.log("dont run")
            }else{
                postBlog(newTitle,newImage,newArticle)
            }
        }
        
        function postBlog(title,image,article){
           
            var colDiv = document.createElement("div")
            colDiv.id = "colDiv"
            colDiv.className = "col-4 border border-light justify-content-center text-center "
        
            

            
            var imageELement = document.createElement("img")
            

            imageELement.id ="blogImage"
            imageELement.className ="img-thumbnail rounded"
            
            imageELement.setAttribute("src",image )
            
            var titleELement = document.createElement("h3")
           
            titleELement.id ="blogTitle"
            titleELement.className ="h3"
           
            titleELement.innerText = title;
            
            var articleElement = document.createElement("p")

            
            articleElement.id = "blogArticle "
            articleElement.className = "lead text-center"

        
            
            articleElement.innerText = article;
            
            var blogDiv = document.getElementById("rowBlog")
            
            blogDiv.appendChild(colDiv)
            colDiv.appendChild(imageELement)
            colDiv.appendChild(titleELement)
            colDiv.appendChild(articleElement)
        }
        console.log(initBlog())
        console.log(getBlog())
        console.log(postBlog())
       
        
        