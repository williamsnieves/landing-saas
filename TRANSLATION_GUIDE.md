# 🌍 Sistema de Traducción Automática con DeepL

Este proyecto incluye un sistema de traducción automática que utiliza la API de DeepL para mantener todas las traducciones sincronizadas.

## 📋 Configuración Inicial

### 1. Obtener API Key de DeepL

1. Ve a [DeepL API](https://www.deepl.com/pro-api)
2. Regístrate para obtener una cuenta gratuita (500,000 caracteres/mes)
3. Copia tu API Key

### 2. Configurar el Proyecto

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Edita `.env` y añade tu API key:

```env
DEEPL_API_KEY=tu_clave_api_aqui
```

## 🚀 Uso

### Traducir Automáticamente

Para traducir todas las claves faltantes en todos los idiomas:

```bash
npm run translate
```

El script:
- ✅ Lee el archivo fuente (`en.json`)
- ✅ Compara con todos los demás idiomas
- ✅ Traduce automáticamente las claves faltantes
- ✅ Actualiza los archivos JSON

### Añadir un Nuevo Idioma

1. **Añade el idioma a la configuración:**

Edita `src/i18n/translations.ts`:

```typescript
export const languages = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
    pt: 'Português',
    fr: 'Français',
    zh: '中文',
    it: 'Italiano',  // ← Nuevo idioma
};
```

2. **Crea el archivo JSON vacío:**

```bash
echo '{}' > src/i18n/locales/it.json
```

3. **Ejecuta el script de traducción:**

```bash
npm run translate
```

¡Listo! El script traducirá automáticamente todo el contenido al italiano.

### Añadir Nuevas Traducciones

1. **Edita solo el archivo inglés** (`src/i18n/locales/en.json`):

```json
{
  "nav.features": "Features",
  "nav.pricing": "Pricing",
  "nav.newSection": "New Section"  // ← Nueva clave
}
```

2. **Ejecuta el script:**

```bash
npm run translate
```

El script detectará la nueva clave y la traducirá automáticamente a todos los idiomas.

## 📁 Estructura de Archivos

```
src/i18n/
├── locales/           # Archivos JSON con traducciones
│   ├── en.json       # Inglés (fuente)
│   ├── es.json       # Español
│   ├── de.json       # Alemán
│   ├── pt.json       # Portugués
│   ├── fr.json       # Francés
│   └── zh.json       # Chino
├── translations.ts   # Importa y exporta las traducciones
└── utils/
    └── i18n.ts       # Utilidades de i18n

scripts/
├── translate.js      # Script de automatización DeepL
└── migrate-i18n.cjs  # Script de migración (usado una vez)
```

## 🔑 Claves de Traducción

Las claves siguen una estructura jerárquica:

```
sección.subsección.elemento
```

Ejemplos:
- `nav.features` → Navegación: Features
- `hero.title.start` → Hero: Título (parte 1)
- `pricing.pro.name` → Pricing: Plan Pro (nombre)

## ⚠️ Notas Importantes

1. **Idioma Fuente:** Siempre edita `en.json` como fuente de verdad
2. **No edites manualmente** los otros idiomas (se sobrescribirán)
3. **Rate Limits:** El script incluye delays para respetar los límites de DeepL
4. **Costos:** La cuenta gratuita de DeepL ofrece 500,000 caracteres/mes

## 🛠️ Solución de Problemas

### Error: "DEEPL_API_KEY not found"

Asegúrate de que:
1. Existe el archivo `.env` en la raíz del proyecto
2. La clave está correctamente escrita: `DEEPL_API_KEY=...`
3. No hay espacios alrededor del `=`

### Las traducciones no se actualizan

1. Verifica que el archivo `en.json` tenga las nuevas claves
2. Elimina la clave del idioma destino para forzar re-traducción
3. Ejecuta `npm run translate` de nuevo

## 📚 Recursos

- [Documentación DeepL API](https://www.deepl.com/docs-api)
- [Límites de la API](https://www.deepl.com/pro-api)
- [Idiomas soportados](https://www.deepl.com/docs-api/translate-text)
