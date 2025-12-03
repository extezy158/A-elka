let toys = [
    { 
        name: "Красный матовый шарик",
         color: "red", 
         count: 5, 
         year: 2023, 
         shape: "ball", 
         favorite: true,
         image: "./images/igrushki/igrushka1.png"
        },
    { 
        name: "Красно-белая игрушка", 
        color: "red",
        count: 8, 
        year: 2010,
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka16.png"
    },
    { 
        name: "Желтый шарик с цветком", 
        color: "yellow", 
        count: 12, 
        year: 1998 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka2.png" 
    },
    { 
        name: "Зеленый шарик с узором", 
        color: "green", 
        count: 6,
        year:  2005, 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka3.png" 
    }
    ,
    { 
        name: "Красная игрушка", 
        color: "red", 
        count: 5, 
        year: 2024 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka4.png" 
    }
    ,
    { 
        name: "Красный шарик с узором", 
        color: "red", 
        count: 8, 
        year: 2016 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka5.png" 
    }
    ,
    { 
        name: "Белая игрушка", 
        color: "white", 
        count: 12, 
        year: 2025 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka6.png" 
    }
    ,
    { 
        name: "Красный шарик", 
        color: "red", 
        count: 6, 
        year: 2000 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka7.png" 
    }
    ,
    { 
        name: "Белый колокольчик", 
        color: "white", 
        count: 5, 
        year: 2013 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka8.png" 
    }
    ,
    { 
        name: "Золотой шарик", 
        color: "gold", 
        count: 8, 
        year: 1987 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka9.png" 
    }
    ,
    { 
        name: "Белая шишка", 
        color: "white", 
        count: 12, 
        year: 2019 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka10.png" 
    }
    ,
    { 
        name: "Белый шарик", 
        color: "white", 
        count: 6, 
        year: 2024 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka11.png" 
    }
    ,
    { 
        name: "Новогодний шарик маленький", 
        color: "NY", 
        count: 5, 
        year: 2024 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka12.png" 
    }
    ,
    { 
        name: "Новогодний шарик большой", 
        color: "NY", 
        count: 8, 
        year: 2024 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/igrushki/igrushka13.png" 
    }
    ,
    { 
        name: "Новогодняя игрушка груша", 
        color: "NY", 
        count: 12, 
        year: 2024 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka4.png" 
    }
    ,
    { 
        name: "Новогодняя игрушка", 
        color: "NY", 
        count: 6, 
        year: 2024 , 
        shape: "toy", 
        favorite: true, 
        image: "./images/igrushki/igrushka6.png" 
    }
];

const toysGrid=document.querySelector(".toys-grid");

toys.forEach((toy,index)=>{
    const toyBox=document.createElement("div");

const img=document.createElement("img");
img.src=toy.image;
img.classList.add("toy");
img.draggable=true;
img.dataset.index=index;

const countBox=document.createElement("div");
countBox.textContent=toy.count;
countBox.style.color=toy.color;
countBox.style.textAlign="center";
countBox.style.fontSize="14px";

    toyBox.appendChild(img);
toyBox.appendChild(countBox);

toysGrid.appendChild(toyBox);
img.addEventListener("dragstart", e => {
    if(toy.count===0){
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData('toy',index);
})
});
const treeArea=document.querySelector(".tree-area");
treeArea.addEventListener("dragover", e => e.preventDefault());



treeArea.addEventListener("drop", e=> {
e.preventDefault();

const rect=treeArea.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

if(e.dataTransfer.getData("toy")!==""){
const toyIndex=e.dataTransfer.getData("toy");
const toy=toys[toyIndex];
if(toy.count>0){
    toy.count--;
    const xPos = x - 40;
    const yPos = y - 40;
    const img=document.createElement("img");
    img.src=toy.image;
    img.classList.add("toy-on-tree");
    img.style.left=xPos+"px";
    img.style.top=yPos+"px";
    treeArea.appendChild(img);
    currentTree.addToy(toy, xPos, yPos);
    toysGrid.children[toyIndex].children[1].textContent=toy.count;
    img.addEventListener("clicl",() => {
        img.remove();
    })
    toy.count +=1;
    toysGrid.children[toyIndex].children[1].textContent=toy.count;
    currentTree.toys=currentTree.toys.filter(t => t!==toy);
    

    
}

}
})