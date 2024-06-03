# Appium
Appium es un framework de automatización de código abierto que ofrece posibilidades de automatización basadas en WebDriver para una amplia gama de diferentes plataformas móviles, de escritorio y de IoT. Appium es modular y extensible, y admite varios lenguajes de programación, lo que significa que existe un ecosistema completo de software relacionado.

Para ver más sobre appium vaya al repositorio oficial de [Appium](https://github.com/appium/appium)

# Appium Windows Driver
Appium Windows Driver es una herramienta de automatización de pruebas para dispositivos Windows y actúa como un proxy para el [servidor WinAppDriver](https://github.com/microsoft/WinAppDriver) de Microsoft. Appium Windows Driver admite pruebas de aplicaciones de la Plataforma Universal de Windows (UWP), Windows Forms (WinForms), Windows Presentation Foundation (WPF) y aplicaciones clásicas de Windows (Win32) en PCs con Windows 10. El servidor en sí es mantenido por Microsoft en https://github.com/microsoft/WinAppDriver. Consulta las notas de la versión y la documentación del proveedor para obtener más detalles sobre las funciones compatibles y posibles inconvenientes.

Mas información en [AppiumWindowsDriver](https://github.com/appium/appium-windows-driver)

# Instalación
Appium se puede instalar usando npm (actualmente no se admiten otros gestores de paquetes). Consulta la [documentación de instalación](https://appium.io/docs/en/latest/quickstart/install/) para conocer los requisitos del sistema y obtener más información.

Si estás actualizando desde Appium 1, asegúrate de que Appium 1 esté completamente desinstalado (`npm uninstall -g appium`). Pueden aparecer errores inesperados si esto no se ha hecho.

```bash
npm install appium -g
```

Ten en cuenta que esto solo instalará el servidor central de Appium, que no puede automatizar nada por sí solo. Por favor, instala los controladores para tus plataformas objetivo para poder automatizarlas.

En nuestro caso instalaremos [AppiumWindowsDriver](https://github.com/appium/appium-windows-driver). Puedes encontrar una lista completa de controladores oficialmente compatibles y de terceros en la página de [Appium Ecosystem's Drivers page.](https://appium.io/docs/en/latest/ecosystem/drivers/)

```bash
appium driver install --source=npm appium-windows-driver
```

 Para comprobar que se ha instalado correctamente escribe en la terminal `appium driver list`

 # Uso
 Además de los requisitos estándar de Appium, Appium Windows Driver añade los siguientes requisitos previos:
 - Appium Windows Driver admite Windows 10 para adelante como host.
 - El modo desarrollador debe estar activado
 - Appium descarga e instala el paquete WinAppDriver automáticamente al ejecutar sus scripts de instalación, aunque la versión binaria actual podría no estar actualizada. En tal caso, puede descargar e instalar la versión más reciente de WinAppDriver manualmente desde la página [Github Release](https://github.com/microsoft/WinAppDriver/releases).

Para iniciar appium en un servidor ejecute el siguiente comando
```bash
appium --use-drivers=windows
```
