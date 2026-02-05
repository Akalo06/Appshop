# Shop App


## Inspiración

La aplicación está fuertemente inspirada en [expo-products-app](https://github.com/DevTalles-corp/expo-products-app)


## Actualizaciones

Esta aplicación fue actualizada a Expo 54 desde Expo 51. Para ello se siguió el siguiente procedimiento:

```sh
# 1. Actualizar expo al siguiente SDK
bun install expo@^52.0.0   # (luego 53, luego 54)

# 2. Actualizar todas las dependencias relacionadas
bunx expo install --fix

# 3. Verificar problemas comunes
bunx expo-doctor

# 4. Revisar el changelog/release notes de cada versión
bunx expo start
```

> [!NOTE]
>
> En el archivo `app.json` se debe cambiar la propiedad `newArchEnabled` a `true` para habilitar la nueva arquitectura de React Native.
> 
> En expo 54 se debe instalar `react-native-worklets`: `bunx expo install react-native-worklets`


Posteriormente se usó npm en lugar de bun y se resolvieron algunas incidencias con las versiones de algunos paquetes. Se eliminó la carpeta `node_modules` y se volvió a instalar las dependencias con `npm install`.

## Prueba y Desarrollo local

1. Instalar las dependencias `npm install`
2. Clonar `.env.template` a `.env` y cambiar la dirección IP o dominio del backend
3. Ejecutar `npx expo start`


## Backend usado

El backend usado es [nxapi-shop](https://github.com/jamj2000/nxapi-shop) desplegado en [Vercel](https://nxapi-shop.vercel.app)
