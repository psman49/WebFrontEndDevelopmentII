
const links = [
    {
        label: "Week1", 
    url:"week1/index.html"
    },

    {label: "Week2", 
    url:"week2/index.html"
    },

    {label: "Week3", 
    url:"week3/index.html"
    },

    {label: "Week4", 
    url:"week4/index.html"
    },
    {label: "Week5", 
    url:"week5/index.html"
    },
    {label: "Week6", 
    url:"week6/index.html"
    }
]


var ol = document.querySelector("ol");
links.forEach(element => {

    var li = document.createElement("li")
    var a = document.createElement("a")
    a.setAttribute("href",element.url)
    a.innerText = element.label

    li.append(a);
    ol.append(li);

});





