//array

const frameworks=[
{
    ano:"2017-2018",
    empresa:"MFC ingenieria y constriccion",
    descripcion:"Descripcion de lo que hice en la empresa"
},
{
    ano:"2021-2023",
    empresa:" Rema tip-top",
    descripcion:"Descripcion de lo que hice en la empresa"
},
{
    ano:"2015-2023",
    empresa:"Independiente",
    descripcion:"Armado, reparacion e instalacion de software a diferentes equipos equipos"
},
{
    ano:"2023",
    empresa:" Futura empresa ",
    descripcion:"Aportar con mis conocimientos y motivacion para cumplir los objetivos y metas propuestas"
}

]


//render html

var html ="";
frameworks.forEach(element => {
        html+="<div class='child'><div class='content'> <h3>"+element.ano+"</h3><h5>"+element.empresa+"</h5><p>"+element.descripcion+"</p></div></div>"
});
timeline.innerHTML=html