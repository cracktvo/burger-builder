para que los css modules funcionen necesitamos eyectar la aplicacion con npm run eject y copiar esta configuracion del archivo webpack.config.js 

Revertir el eject

1.- Back up de la carpeta config y scripts en package.json eliminar la seccion jets.
2.- Borrar carpeta config
3.- Correr npm install react-scripts
4.- Agregar "eject": "react-scripts eject" al package json
5.- Crearte un branch darle push 
6.- npm run eject
7.- Restaurar el back up de la carpeta config package.json.

