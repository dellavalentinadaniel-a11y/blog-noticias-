# Metric Press - Plataforma de Noticias Profesional

Bienvenidos al repositorio de **Metric Press**, una plataforma web de noticias moderna, totalmente responsiva y diseñada con estándares profesionales de UX/UI y Accesibilidad.

## Contexto del Proyecto
Este proyecto fue creado con el objetivo de ofrecer una experiencia de usuario rápida y premium para la lectura de artículos y noticias. Está pensado para escalar y cuenta con una arquitectura de código limpio que prioriza el rendimiento, SEO, y una fácil mantenibilidad. 

Se puso un énfasis crítico en la separación de responsabilidades: **no existen estilos en línea (`style={{...}}`) en los componentes**. Todo el diseño visual, el espaciado y la tipografía se manejan estrictamente a través de un sistema de diseño centralizado y clases utilitarias en el archivo CSS principal.

## Stack Tecnológico
- **Core:** React 18, TypeScript, Vite.
- **Estilos:** CSS Vanilla estructurado con clases utilitarias semánticas (sin TailwindCSS, usando diseño a medida).
- **Iconografía:** Lucide React.
- **Herramientas de Calidad:** ESLint, Prettier, TypeScript Estricto.

## Estructura de Estilos (Importante)
El proyecto utiliza un sistema de clases CSS utilitarias definidas en `src/index.css`. 
Si necesitas añadir o modificar un diseño:
1. Revisa si la clase utilitaria ya existe en `index.css` (ej. `mb-xl`, `gap-md`, `text-muted`, `icon-btn`).
2. **NUNCA uses estilos en línea**. Esto es un principio inquebrantable del proyecto.

## Instalación y Ejecución Local

Para ejecutar este proyecto en tu entorno local:

```bash
# 1. Instalar las dependencias
npm install

# 2. Iniciar el servidor de desarrollo local
npm run dev

# 3. Compilar el proyecto para producción
npm run build
```

---

## 🛑 PROTOCOLO OBLIGATORIO PARA AGENTES DE IA Y DESARROLLADORES 🛑

La siguiente es una directiva **estricta** para cualquier Agente de Inteligencia Artificial (como Claude, GPT-4, Gemini, etc.) o desarrollador humano que vaya a interactuar, leer, modificar o extender este código.

### 1. Actualización de Avances e Implementos
Cualquier intervención que genere cambios sustanciales en el código, arquitectura o flujos de trabajo **DEBE** ser documentada inmediatamente. 

* **Agentes IA:** Deben mantener actualizados los artefactos de la carpeta `.gemini/antigravity/brain/` u otros registros de la sesión (como `task.md` y `walkthrough.md`). 
* **Finalidad:** Que los próximos agentes que retomen la tarea sepan exactamente en qué estado quedó el proyecto y qué decisiones técnicas se tomaron, asegurando así un avance continuo y sin inconvenientes.

### 2. Cumplimiento de Calidad del Código
Antes de dar por finalizada una tarea, el agente o desarrollador debe verificar:
- Que no se introdujeron errores de linting (`npm run lint`).
- Que no existan errores de módulos no encontrados (asegurar uso de extensiones correctas en las importaciones `.tsx`/`.ts` donde la configuración lo requiera).
- Que el proyecto compila exitosamente mediante `npm run build`.
- Que no se añadieron estilos inline y se respetó el sistema de clases existente.

---
*Este documento asegura la viabilidad a largo plazo de Metric Press. Su cumplimiento no es opcional.*
