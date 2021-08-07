        // make this like fin.js but document.creatElement(div) and figure out add class
        //var arr= new Array()
        arrayData = new Object();
        console.log("this is the FIRST array data object "+JSON.stringify(arrayData))
        arr = new Array();
        console.log("this is the FIRST arr array "+JSON.stringify(arr))
        console.log("this is the arr array this is the length  "+arrayData.length)

        
        //let arrTest = [];
        //arrTest.push({mac:"cool",time:"stop"})
        //console.log("testing the array  "+arrTest)
       // console.log("testing the array .mac  "+arrTest[0].mac)

        //console.log("testing the array index 0  "+arrTest[0])
        
        

        //this will show the pass posts
        function initBlog(){
            if (localStorage.getItem("localBlog")){
                let getBlog = localStorage.getItem("localBlog")           
                console.log("getBlog from storage should be a string" +getBlog)
                
                //figure out why the parse is returning an object and not an array
                let blogJson = JSON.parse(getBlog);
                console.log("this is blogJson parse should be array "+ blogJson)
                console.log("this is index 0 .title"+ blogJson[0].titleObj)
                arrayData= blogJson;
                console.log("array data length in init  "+ arrayData.length)
                console.log("array data in init  "+ JSON.stringify(arrayData))
                
                
                for (let i =0;i< arrayData.length; i++) { 
                    console.log("this is the loops so far  " + i )
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
        //this will store the information
        function getBlog() {
            var newTitle = document.getElementById('title').value;
             console.log("value of inputed title " + newTitle)

            var newArticle = document.getElementById('article').value;
            console.log("value of inputed article " + newArticle)

            var newImage = document.getElementById('image').value;
            console.log("value of inputed image url " + newImage)
            //the value is being returned this is not the problem
            
            
           
            //used to add to array check if this works
            // not working find out why
            //let arr = [];
            //this array is starting again every click i need for the array to be added
            /* var res = people.map(function(v) {
                return v[Object.keys(v)[0]].score;
              }); */
           var arrayData = {
            length: 0,
        
                addElem: function addElem(elem) {
                    // obj.length is automatically incremented
                    // every time an element is added.
                    arr.push.call(this, elem)
                }
            }
            //object is reading the object THIS IS NOT THE Problem
            var blogObj = {titleObj:newTitle, articleObj:newArticle, imageObj:newImage};
            console.log("the item in the object at indext 0 " + blogObj.titleObj)
            /* var arraydata = blogObj.map(function(i) {
                return i[*/
            arrayData.addElem(blogObj);
            //THIS IS THE FIRST THING I NEED TO FIGURE OUT
            //now adding items but only one
            
            console.log("this is the array before storeage "+JSON.stringify(arrayData))//
            localStorage.setItem("localBlog",JSON.stringify(arrayData))
            if (blogObj.titleObj == "" ){
                console.log("dont run")
            }else{
                postBlog(newTitle,newImage,newArticle)
            }
        }
        //this will make the post
        function postBlog(title,image,article){
            //creat the div from scrach
            var colDiv = document.createElement("div")
            colDiv.id = "colDiv"
            colDiv.className = "col-4 border border-light justify-content-center text-center "
        
            //apend child

            //add image element
            var imageELement = document.createElement("img")
            //add class to image

            imageELement.id ="blogImage"
            imageELement.className ="img-thumbnail rounded"
            // add url to image
            imageELement.setAttribute("src",image )
            //apend child
            //add title element
            var titleELement = document.createElement("h3")
            //add class
            titleELement.id ="blogTitle"
            titleELement.className ="h3"
            // add title text
            titleELement.innerText = title;
            //add article
            var articleElement = document.createElement("p")

            // add class
            articleElement.id = "blogArticle "
            articleElement.className = "lead text-center"

        
            // add article text
            articleElement.innerText = article;
            
            var blogDiv = document.getElementById("rowBlog")
            
            blogDiv.appendChild(colDiv)
            colDiv.appendChild(imageELement)
            colDiv.appendChild(titleELement)
            colDiv.appendChild(articleElement)

            //tag.setattrebute.("scr",imageURL)
            
            //let disBlog = "<div class = 'row'><div class='col-6'><h2>"+ blogJson.titleObj +"</h2><p>"+ blogJson.articleObj +"</p><img src='"+ blogJson.imageObj +"'></div></div>"
            //document.getElementById("blog").innerHTML = disBlog;
            //console.log("this is the blog contents  "+disBlog)

        }
        console.log(initBlog())
        console.log(getBlog())
        console.log(postBlog())
        console.log("this is the Second array data object "+JSON.stringify(arrayData))
        
        console.log("this is the Second arr array "+arr)
        console.log("this is the arr array this is the length  "+arrayData.length)
        
        