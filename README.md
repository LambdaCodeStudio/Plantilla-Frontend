# Frontend Astro + React + Tailwind

Frontend con autenticación y rutas protegidas, construido con Astro y React.

## 🛠 Tecnologías

- Astro
- React
- TailwindCSS
- Axios
- TypeScript

## 📋 Requisitos

- Node.js v14+
- npm o yarn

## 🚀 Instalación

1. Clonar e instalar dependencias:
```bash
git clone <tu-repo>
cd frontend
npm install
```

2. Crear archivo `.env`:
```env
PUBLIC_API_URL=http://localhost:4000/api
PUBLIC_SITE_URL=http://localhost:3000
```

## 💻 Desarrollo

```bash
npm run dev
```

## 📁 Estructura

```
src/
├── components/     # Componentes React
│   ├── auth/      # Componentes de autenticación
│   ├── ui/        # Componentes UI
│   └── common/    # Componentes comunes
├── layouts/       # Layouts Astro
├── pages/         # Rutas
├── services/      # Servicios API
├── hooks/         # Custom hooks
├── types/         # TypeScript types
└── styles/        # Estilos
```

## 🔒 Características

- Autenticación completa (Login/Registro)
- Rutas protegidas
- Manejo de tokens
- Dashboard base
- Formularios validados
- Diseño responsive

## 📱 Páginas

- `/login` - Inicio de sesión
- `/register` - Registro
- `/dashboard` - Panel principal (protegido)

## ⚙️ Configuración

### Astro
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  server: {
    port: 3000
  }
});
```

### Tailwind
```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF'
      }
    }
  }
};
```

## 🔍 Scripts Disponibles

- `npm run dev` - Desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build

## ⚠️ Consideraciones

1. El backend debe estar corriendo en puerto 4000
2. Asegurarse de tener las variables de entorno configuradas
3. Para producción, actualizar las URLs en el .env

## 📝 Licencia

MIT
# lyme
