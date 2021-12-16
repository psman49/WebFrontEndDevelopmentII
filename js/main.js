
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
    },
    {label: "Week7", 
    url:"week7/index.html"
    },
    {label: "Week8", 
    url:"week8/index.html"
    },
    {label: "Week9", 
    url:"week9/index.html"
    },
    {label: "Week10", 
    url:"week10/index.html"
    },
    {label: "Final Project",
    url:"finalproject/index.html"}
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





