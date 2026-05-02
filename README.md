# Guilty Gear Strive Slideshow

Presentacion web interactiva sobre por que **Guilty Gear Strive** es un juego tan especial: su energia visual, musica, personajes, HUD arcade, trailers, clips y momentos memorables.

El proyecto esta pensado para mostrarse en vivo a amigos que no conocen el juego. Por eso prioriza impacto visual, transiciones con assets reales del HUD, videos embebidos, musica de fondo y fichas de personajes faciles de explorar.

## Que incluye

- Intro con opening de YouTube en pantalla completa dentro de la web.
- Splash con logo de Guilty Gear Strive para iniciar la presentacion.
- Transicion arcade con assets `LET'S ROCK`.
- Slides principales:
  - Hero visual de Guilty Gear Strive.
  - Que es Strive.
  - Por que jugarlo se siente tan bien.
  - Roster con 33 personajes jugables.
  - Momentos para mostrar.
  - Cierre personal.
  - Final `TIME UP`.
- Modal de video compatible con YouTube y videos locales.
- BGM persistente con playlist de YouTube.
- La BGM se pausa cuando se abre un video y se reanuda al cerrar.
- Fichas de personaje con bio en espanol, tema, trailer y video extra.
- Animaciones con estilo arcade HUD, impact frames y hover effects.
- Responsive para desktop y mobile.

## Tecnologias

- **Next.js 16** con App Router.
- **React 19**.
- **TypeScript**.
- **Motion** para transiciones y animaciones.
- **Tailwind CSS 4 / PostCSS** como parte del stack del proyecto.
- **CSS custom** para HUD, impact frames, responsive layout y efectos visuales.
- **YouTube IFrame API** para controlar la BGM, volumen y pausa/reproduccion.
- **YouTube no-cookie embeds** para videos externos.
- **Assets locales en `public/`** para HUD, personajes, fondos, videos y logos.

## Estructura principal

```txt
app/
  globals.css
  page.tsx
src/
  features/
    characters/
      components/
      data/
      types.ts
    slideshow/
      components/
      data/
      hooks/
      types.ts
  shared/
    components/
public/
  assets/
  characters/
  Strive_HUD/
  videos/
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Servidor local:

```bash
npm run dev
```

Luego abrir:

```txt
http://localhost:3000
```

## Media y creditos

Este es un proyecto fan-made, no oficial, hecho con fines personales/educativos y de presentacion. **Guilty Gear, Guilty Gear Strive, personajes, musica, videos oficiales, HUD y assets visuales pertenecen a Arc System Works y sus respectivos propietarios.**

Los videos de YouTube usados en la presentacion pertenecen a sus respectivos canales/autores. El proyecto solo los referencia mediante embeds.

### Videos principales

- Opening inicial: `Yhr9WpjaDzw`
- Trailer hero: `RVd6vhFhYiM`
- BGM principal: `yYhYueboxuM`
- Playlist BGM principal: `PLpOrzUG88lRS7ilTJYV-tieNtR9PxKKIy`
- BGM final: `hWPi-G14QEY`

### Slide "Que es Strive"

- Video local 2.5D: `/videos/visual-2-5.mp4`
- Musica con identidad: `uOO9L1rkVQs`, inicia en `669s`
- Accesible, no simple: `gfbche-D_Kk`

### Slide "Por que jugarlo se siente tan bien"

- Roman Cancel: `/videos/roman cancel.mp4`
- Wall Break: `/videos/wall break.mp4`
- Tension: `/videos/tension.mp4`

### Momentos para mostrar

- `JIC4j-DNgaA`
- `D_2PbKG5zMI`
- `FJwQRmNxm_s`
- `ByetrDRHPh4`
- `C2QtEFP27xo`
- `6CVx9tX__Dw`
- `l91uAMquZfg`
- `NBfRh9xNJT8`
- `1gNfHJsXXo4`
- `0Ji1j5ndXNM`
- `jzXkl10Gxsg`
- `F4kDkGvmb8M`
- `CAaHsj_DgH0`
- `ZXVbS-HV858`, inicia en `149s`
- `gszFxXFnyBU`
- `tf4weV4Q-3w`
- `oA4G0dEDxmc`

### Personajes

Las bios, temas, trailers y videos extra de personajes viven en:

- `src/features/characters/data/characters.ts`
- `public/CHAR BIOS.txt`

Algunos videos extra locales usados:

- Potemkin: `/videos/potemkim algo mas.mp4`
- Goldlewis Dickinson: `/videos/goldlewis algo mas.mp4`
- Jam: `/videos/jam algo mas.mp4`

## Assets

El proyecto usa assets locales del juego para dar identidad arcade HUD:

- Logo y key art: `public/assets/gg/`
- HUD y textos de batalla: `public/Strive_HUD/`
- Chibis y portraits: `public/characters/`
- Clips locales: `public/videos/`

Assets destacados:

- `public/assets/gg/title-logo-dark.png`
- `public/assets/gg/season-3-main-visual.jpg`
- `public/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_LetsRock_Lets.png`
- `public/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_LetsRock_RocK.png`
- `public/Strive_HUD/Battle_Demo_tex/TXT_HorHl.png`
- `public/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_TIMEUP_00.png`
- `public/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_TIMEUP_EFF.png`

## Agradecimientos

- **Arc System Works**, por Guilty Gear Strive, su direccion visual, musica, personajes y HUD.
- Creadores y canales de YouTube enlazados en la presentacion.
- Comunidad de Guilty Gear, por guias, clips, tech, memes y pasion por el juego.
- Amigos que van a ver la presentacion y compartir la experiencia.

## Nota legal

Este repositorio no esta afiliado, patrocinado ni aprobado por Arc System Works. Todo material de Guilty Gear Strive se usa como referencia fan-made para una presentacion personal. Si algun propietario de contenido solicita cambios o retiro de material, debe respetarse.
