import React,{Component} from 'react';
import './App.css'
import Banner from './complementos/Banner';
import Body from './complementos/Body';
import Footer from './complementos/Footer';
import Header from './complementos/Header';



class App extends Component{
    render(){

        const temas=["Tipos de componentes", 
            "Contenedores", 
            "Usar mas de un componente", 
            "Funciones", 
            "Props", 
            "Prop-Types", 
            "DefaultProps"
        ]

        return ( 
            <div>
                <Banner textoban = "Desarrollo de Aplicaciones para Dispositivos Móviles" />
                
                <Header/>

                <Banner textoban = "19 de Octubre 2021"/>

                <Body
                        practica ="Practica 1 - Unidad 2"
                        eltemas = {temas}
                />

                <Footer textofoo = {<p> Copyright &copy; Todos los derechos reservados </p>}/>
                
            </div>
        );
    
}

}

export default App;
