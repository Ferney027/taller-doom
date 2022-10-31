class animal{
    constructor(nombre, raza, edad){
        this.nombre=nombre;
        this.raza=raza;
        this.edad=edad;
    }
informacion(){
    return  `EL nombre del perro es ${this.name} y la raza es ${this.raza}`
}
}
//crear una instancia de clase 
const perroNuevo= new animal('federico', 'beagin',6);
// herencia (inherits) de clase de
class miperro extends Animal{
    constructor(raza, edad, color){
        super(raza, edad);
        this.color=color;
    }
}
const minewPerro= new miperro ('criolla', '10years','white')



//encapsulamiento////
class Dog extends Animal{
    #raza 
    constructor(raza, edad, color){
        super(raza, edad);
        this.color=color;
        this.#raza=raza;
    }
    getRaza(){return this.#raza;}
    setRaza(){this.#raza=raza;}
}
const myDog= new Dog ('criolla', '10years','white')
myDog.setRaza('lobo siberiano');
myDog.getRaza();
myDog.raza="pincher"// agregar atributo a la intancia myDog
Object.values(myDog)
// Ejercicio en clase//


class componentes{
    constructor(marca,nombre){
        this.marca=marca;
        this.nombre=nombre;
    }
    informacion(){
        console.log(` ${this.nombre} marca ${this.marca}`
        )
    }
}
class  mouse extends componentes{
    #dpi
    constructor(nombre, marca, precio){
        super(marca, nombre)
        this.precio=precio;
        this.#dpi=dpi;
        
    }
    getMouse(){
        return this.#dpi;
    }
    setMouse(dpi){
        this.#dpi=dpi;
    }
 
}
class teclado extends componentes{
    #rgb
    constructor(tamano, marca, nombre){
        super(marca, nombre)
        this.tamano=tamano;
        this.#rgb=rgb;
    } 
    getrgb(){
        return this.#rgb;
    }
    setrgb(){
        this.#rgb=rgb;
    }
}

const raton=new mouse('mouse 450G','raizen', 25000)
raton.setMouse('Dpi 3000')
raton.getMouse()
raton.dpi="1500"
const keyboar=new teclado('grande mecanico','dragon','dragon250fuego llameante') 
teclado.setrgb('rgb multivariado')
teclado.getrgb()
teclado.rgb="blanco"
Object.values(raton)
Object.keys(raton)


