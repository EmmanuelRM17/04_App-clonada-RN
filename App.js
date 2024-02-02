import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.barraBusqueda}>🔍 Buscar plantilla</Text>
      </View>
      <View style={styles.filtros}>
        <View style={styles.filtro}><Text style={styles.textoFiltro}>Siguiendo</Text></View>
        <View style={styles.filtro1}><Text style={styles.textoFiltro1}>para ti</Text></View>
        <View style={styles.filtro}><Text style={styles.textoFiltro}>Sincronizado</Text></View>
        <View style={styles.filtro}><Text style={styles.textoFiltro}>Lyrics</Text></View>
        <View style={styles.filtro}><Text style={styles.textoFiltro}>Relacion</Text></View>
      </View>
      <View style={styles.galeria}>
        <View style={styles.itemGaleria}>
          <Image source={require('./assets/img/IMG-20240201-WA0009.jpg')} style={styles.imagen} />
          <Text style={styles.pieFoto}>Until Found You</Text>
          <View style={styles.nombres}>
            <View style={styles.icono2}></View>
            <Text>Y u r i </Text>
          </View>
        </View>
        <View style={styles.itemGaleria}>
          <Image source={require('./assets/img/IMG-20240201-WA0010.jpg')} style={styles.imagen} />
          <Text style={styles.pieFoto}>usem muitoo</Text>
          <View style={styles.nombres}>
            <View style={styles.icono2}></View>
            <Text>Gislaine MS</Text>
          </View>
        </View>
        <View style={styles.itemGaleria}>
          <Image source={require('./assets/img/IMG-20240201-WA0012.jpg')} style={styles.imagen} />
          <Text style={styles.pieFoto}>Solito me llegó</Text>
          <View style={styles.nombres}>
            <View style={styles.icono2}></View>
            <Text>Luna CC</Text>
          </View>
        </View>
        <View style={styles.itemGaleria}>
          <Image source={require('./assets/img/IMG-20240201-WA0011.jpg')} style={styles.imagen} />
          <Text style={styles.pieFoto}>Solito me llegó</Text>
          <View style={styles.nombres}>
            <View style={styles.icono2}></View>
            <Text>Luna CC</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuInferior}>
        <View style={styles.elementoMenu}>
          <Image source={require('./assets/img/icon1.jpg')} style={styles.icono} />
          <Text style={styles.textoMenu}>Editar</Text>
        </View>
        <View style={styles.elementoMenu}>
          <Image source={require('./assets/img/icon2.jpg')} style={styles.icono} />
          <Text style={styles.textoMenu}>Plantillas</Text>
        </View>
        <View style={styles.elementoMenu}>
          <Image source={require('./assets/img/icon3.jpg')} style={styles.icono} />
          <Text style={styles.textoMenu}>Bandeja de Entrada</Text>
        </View>
        <View style={styles.elementoMenu}>
          <Image source={require('./assets/img/icon4.jpg')} style={styles.icono} />
          <Text style={styles.textoMenu}>Yo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    margin: 1,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: '#fff',
  },
  encabezado: {
    margin: 10,
  },
  barraBusqueda: {
    height: 40,
    width: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderWidth: 2,  
    fontSize: 20,
    color: '#d1ccc3',
    borderColor: '#eaeaea',

  },
  titulo: {
    fontSize: 24,
    color: '#ffff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#fff',
  },
  creador: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  encabezadoCreador: {
    marginLeft: 10,
  },
  ranking: {
    backgroundColor: '#AEC2FF',
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  encabezadoRanking: {
    marginLeft: 10,
  },
  filtros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  filtro: {
    borderRadius: 8,
    borderWidth: 2,  
    borderColor: '#d1cccc',  
    height: 'fit-content',
    padding: 10,
    margin: 5,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },
  filtro1: { //filtro de color negro
    borderRadius: 8,
    borderWidth: 2,  
    borderColor: '#000000',  
    height: 'fit-content',
    padding: 10,
    margin: 5,
    marginRight: 10,
    backgroundColor: '#000000',
  },
  textoFiltro: {
    color: '#000000',
  },
  textoFiltro1: {
    color: '#ffffff',
    backgroundColor: '#000000'
  },
  galeria: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
  },
  itemGaleria: {
    borderRadius: 8,
    width: '45%',
    margin: '2.5%',
    padding: 2,
    backgroundColor: '#fff',
  },
  imagen: {
    width: '90%',
    height: '70%',  
    borderRadius: 10,
  },
  pieFoto: {
    margin: 5,
    fontSize: 16,
  },
  nombres: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 10,  
    borderTopColor: '#eaeaea',
  },
  elementoMenu: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 1,  
  }, //inconos del menu
  icono: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginBottom: 10,  
  },
  textoMenu: {
    color: '#000000',
  },
  icono2: { //inconos del perfil
    height: 20,
    width: 20,
    backgroundColor: '#a21113',
    borderRadius: 20,
    marginRight: 10,
    
  }
});
