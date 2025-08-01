# Mapa de Navegación - Proceso de Inscripción

Este proyecto es una aplicación web interactiva desarrollada con React y Bootstrap que muestra un **mapa de navegación** estructurado en tarjetas, diseñado para visualizar de forma clara y escalable el proceso de inscripción académica.

---

## Demo

Puedes ver el proyecto desplegado en GitHub Pages:

[https://sebas7532silva.github.io/nav_map/](https://sebas7532silva.github.io/nav_map/)

---

## Descripción

La aplicación representa un árbol de navegación que detalla los pasos y funcionalidades dentro del proceso de inscripción en un sistema académico. Cada nodo es una tarjeta interactiva que puede expandirse para mostrar niveles adicionales de detalle. Esto es parte de la materia de UI/UX de la Maestría en Inteligencia Artificial de parte del equipo 18. 

El diseño es:

- **Responsivo**: adapta el layout a varios tamaños de pantalla.
- **Interactivo**: los nodos con hijos se pueden expandir/colapsar al hacer click.
- **Visualmente atractivo**: con tarjetas con sombras, colores diferenciados y flechas indicativas para guiar la navegación.

---

## Estructura del mapa

El mapa está basado en un arreglo JSON llamado `sitemap` que contiene los nodos con título y posibles hijos anidados. Las principales secciones incluyen:

1. **Mi Panel de Inscripción**
2. **Confirmar mi Horario y Pago**
3. **Finalizar Pago y Obtener Documentos**
4. **Consultas posteriores y soporte**
5. **Mi Perfil / Acceso**

Cada una de estas tiene subsecciones que describen funcionalidades y opciones dentro del proceso.

---

## Tecnologías usadas

- **React** (Funcional, hooks, componentes)
- **Bootstrap 5** para diseño y responsividad
- **CSS personalizado** para estilos específicos (Sitemap.css)
- **Vite** como bundler y servidor de desarrollo
- **GitHub Pages** para despliegue estático

---

