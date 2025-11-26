console.log("hello");

let best=['gn','fs','sa','das','asd'];

let numbers=[10,20,30];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

let fruits=['apple','banana','orange'];
for(let fruit of fruits){
    console.log(fruit);
}

let students=[
    {name:'John',age:20},
    {name:'Jane',age:18},
    {name:'Bob',age:22},
];

for(let student of students){
    console.log(student.name);
}


let nums1=[10,20,30,40];

let part=nums1.slice(1,3);
console.log(part);
console.log(nums1);

let nums2=[10,20,30];
let newNums2=nums2.map(n => n+5);
console.log(newNums2);

let nums3=[5,12,3,8,6,23,4,65];
let even=nums3.filter(n => n > 10);
console.log(even);


let boxes=[
    {weight: 2, label:"Легкая"},
    {weight: 5, label:"Средняя"},
    {weight: 12, label:"Тяжелая"},
    {weight: 15, label:"Очень тяжелая"}
];

let heavyBox=boxes.find(box => box.weight > 10);
console.log(heavyBox);

let innerPlanets=["Меркурий","Венера","Земля","Марс"];
let outerPlanets=["Юпитер","Сатурн","Уран","Нептун"];

let allPlanets=innerPlanets.concat(outerPlanets);
console.log(allPlanets);

let words=['Я','Люблю','JS'];

let sentacne=words.join(' ');
console.log(sentacne);

let toys=[
    {
        name:'Большой шар с рисунком Цветок',
        count:2,
        year:1960,
        shape:'шар',
        color:'желтый',
        size:'большой',
        favotite:false
    },
    {
        name:'зеленый шар с цветочным узором',
        count:5,
        year:2000,
        shape:'шар',
        color:'зеленый',
        size:'большой',
        favotite:false
    },
    {
        name:'Красный шар с напылением',
        count:3,
        year:1990,
        shape:'шар',
        color:'красный',
        size:'средний',
        favotite:false
    },
    {
        name:'Маленький синий шар',
        count:6,
        year:2010,
        shape:'шар',
        color:'синий',
        size:'маленький',
        favotite:false
    }
]


toys.forEach(toy => {
    console.log(toy.name+'-'+toy.color+', форма:'+toy.shape+', количество:'+toy.count);
})


let updateToys=toys.map(toy => {
    return{
        ...toy,
        count:toy.count+1
    };
});
console.log(updateToys);

let car={brand:'BMW', year:'2020'};


let tree={
    type: 'snowy',
    background: 'living room',
    garland:'multi',
    toys: [
        {id:1, x:120, y:240, type:'ball_red'},
        {id:2, x:160, y:300, type:'ball_gold'},
    ]
};

user.name='Ivan';
user.age=30;
delete user.name;
console.log(user);


let original={a:1, b:2};

let copy=Object.assign({},original);
copy.a=99;
console.log(original.a);


let otiginal={a:1, b:2};
let copy={...otiginal};
copy.b=300;
console.log(otiginal.b);
