import type { Slide } from "../types";

export const slides: Slide[] = [
  {
    type: "hero",
    kicker: "Heaven or Hell",
    title: "Guilty Gear Strive",
    copy:
      "Una presentacion web sobre por que Guilty Gear Strive es una de las experiencias mas estilizadas, tecnicas y memorables dentro de los fighting games modernos.",
    mediaLabel: "Let's Rock",
    mediaTag: "Round 01",
    notes:
      "Abre con energia. Explica que no es una presentacion normal: es una demo web hecha por un programador para hablar de su juego favorito.",
  },
  {
    type: "topics",
    kicker: "Contexto",
    title: "Que es Strive",
    copy:
      "Un fighting game de Arc System Works que mezcla anime, rock, metal, narrativa exagerada y sistemas de combate con mucha expresion personal.",
    topics: [
      {
        title: "2.5D visual",
        description:
          "Modelos 3D tratados como animacion 2D, camaras dramaticas y poses con mucha lectura visual.",
        video: { kind: "local", src: "/videos/visual-2-5.mp4" },
      },
      {
        title: "Musica con identidad",
        description:
          "Cada personaje se siente como una cancion, no solo como un set de movimientos.",
        video: { kind: "youtube", src: "uOO9L1rkVQs", start: 669 },
      },
      {
        title: "Accesible, no simple",
        description:
          "Tiene entrada mas amable que juegos anteriores, pero conserva profundidad competitiva.",
        video: { kind: "youtube", src: "gfbche-D_Kk" },
      },
    ],
    notes:
      "Resume el juego sin tecnicismos. Tu objetivo es que cualquiera entienda el atractivo general.",
  },
  {
    type: "mechanics",
    kicker: "Gameplay",
    title: "Por que jugarlo se siente tan bien",
    copy:
      "Strive convierte cada decision en espectaculo: presion, defensa, recursos, riesgo y recompensa. El juego se entiende visualmente, pero premia estudiar.",
    mechanics: [
      {
        name: "Roman Cancel",
        description:
          "Pausa, extiende o corrige acciones. Convierte decisiones pequenas en momentos grandes.",
        video: { kind: "local", src: "/videos/roman cancel.mp4" },
      },
      {
        name: "Wall Break",
        description:
          "Romper la pared cambia posicion, ritmo y recompensa. Hace que el combate avance como una escena de anime.",
        video: { kind: "local", src: "/videos/wall break.mp4" },
      },
      {
        name: "Tension",
        description:
          "El recurso que decide cuanto puedes arriesgar, defenderte o convertir un golpe en dano real.",
        video: { kind: "local", src: "/videos/tension.mp4" },
      },
    ],
    notes:
      "No expliques todos los inputs. Explica la fantasia: el jugador siente que dirige una pelea con estilo.",
  },
  {
    type: "characters",
    kicker: "Roster",
    title: "33 personajes jugables",
    copy:
      "Cada personaje no solo tiene lore y diseno: tambien tiene una filosofia de juego. El roster queda organizado por archetype, chibi para seleccion y portrait completo para la ficha.",
    notes:
      "Esta slide es ideal para interactuar en vivo. Muestra hover y entra al detalle de tu personaje favorito.",
  },
  {
    type: "videos",
    kicker: "Media",
    title: "Momentos para mostrar",
    copy:
      "La presentacion debe respirar con clips: trailers, combos, intros, supers o canciones. Esta seccion ya tiene el reproductor listo para YouTube o videos locales.",
    videos: [
      ["Opening movie", "youtube", "Yhr9WpjaDzw"],
      ["Combo o super favorito", "local", "/videos/combo-demo.mp4"],
    ],
    notes:
      "Reemplaza el ID de YouTube o agrega videos locales en public/videos. Clips de 15 a 30 segundos ayudan a no pasarte de tiempo.",
  },
  {
    type: "topics",
    kicker: "Cierre",
    title: "Por que es mi favorito",
    copy:
      "Porque combina tecnica, estilo, musica y personajes de una forma que se siente hecha para gente que ama videojuegos, anime y presentaciones con actitud.",
    topics: [
      [
        "Estilo",
        "No intenta parecer realista. Se compromete por completo con su identidad visual.",
      ],
      [
        "Aprendizaje",
        "Cada partida te ensena algo: timing, matchup, lectura, paciencia o agresion.",
      ],
      [
        "Recuerdo",
        "Incluso si no juegas fighting games, es dificil olvidar como se ve y suena.",
      ],
    ],
    notes:
      "Cierra conectandolo contigo: tus gustos, tu lado programador y por que quisiste hacer la presentacion como web.",
  },
];
