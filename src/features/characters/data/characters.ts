import type { Character } from "../types";

type CharacterSeed = {
  slug: string;
  name: string;
  code: string;
  archetype: string;
};

type CharacterCopy = Pick<
  Character,
  "bio" | "hotTake" | "referenceVideo" | "subtext" | "trailerVideo"
>;

const archetypeStats: Record<string, Record<string, number>> = {
  Balance: { Damage: 72, Pressure: 68, Range: 70, Difficulty: 52 },
  Power: { Damage: 92, Pressure: 64, Range: 62, Difficulty: 58 },
  Zoning: { Damage: 66, Pressure: 54, Range: 94, Difficulty: 70 },
  Rushdown: { Damage: 76, Pressure: 92, Range: 48, Difficulty: 64 },
  Unique: { Damage: 70, Pressure: 74, Range: 72, Difficulty: 86 },
  "One Shot": { Damage: 98, Pressure: 72, Range: 88, Difficulty: 82 },
  Shooting: { Damage: 74, Pressure: 84, Range: 90, Difficulty: 88 },
};

const seeds: CharacterSeed[] = [
  { archetype: "Balance", code: "SOL", name: "Sol Badguy", slug: "sol-badguy" },
  { archetype: "Balance", code: "KY", name: "Ky Kiske", slug: "ky-kiske" },
  { archetype: "Power", code: "MAY", name: "May", slug: "may" },
  { archetype: "Zoning", code: "AXL", name: "Axl Low", slug: "axl-low" },
  { archetype: "Rushdown", code: "CHIPP", name: "Chipp Zanuff", slug: "chipp-zanuff" },
  { archetype: "Power", code: "POTEMKIN", name: "Potemkin", slug: "potemkin" },
  { archetype: "Unique", code: "FAUST", name: "Faust", slug: "faust" },
  { archetype: "Rushdown", code: "MILLIA", name: "Millia Rage", slug: "millia-rage" },
  { archetype: "Unique", code: "ZATO", name: "Zato-1", slug: "zato-1" },
  {
    archetype: "Balance",
    code: "RAMLETHAL",
    name: "Ramlethal Valentine",
    slug: "ramlethal-valentine",
  },
  { archetype: "Rushdown", code: "LEO", name: "Leo Whitefang", slug: "leo-whitefang" },
  {
    archetype: "One Shot",
    code: "NAGORIYUKI",
    name: "Nagoriyuki",
    slug: "nagoriyuki",
  },
  { archetype: "Rushdown", code: "GIOVANNA", name: "Giovanna", slug: "giovanna" },
  { archetype: "Balance", code: "ANJI", name: "Anji Mito", slug: "anji-mito" },
  { archetype: "Rushdown", code: "I-NO", name: "I-No", slug: "i-no" },
  {
    archetype: "Power",
    code: "GOLDLEWIS",
    name: "Goldlewis Dickinson",
    slug: "goldlewis-dickinson",
  },
  { archetype: "Unique", code: "JACK-O'", name: "Jack-O'", slug: "jack-o" },
  {
    archetype: "Shooting",
    code: "HAPPY CHAOS",
    name: "Happy Chaos",
    slug: "happy-chaos",
  },
  { archetype: "Balance", code: "BAIKEN", name: "Baiken", slug: "baiken" },
  { archetype: "Zoning", code: "TESTAMENT", name: "Testament", slug: "testament" },
  { archetype: "Balance", code: "BRIDGET", name: "Bridget", slug: "bridget" },
  { archetype: "Balance", code: "SIN", name: "Sin Kiske", slug: "sin-kiske" },
  { archetype: "Unique", code: "BEDMAN?", name: "Bedman?", slug: "bedman" },
  { archetype: "Unique", code: "ASUKA R#", name: "Asuka R#", slug: "asuka-r-sharp" },
  { archetype: "Zoning", code: "JOHNNY", name: "Johnny", slug: "johnny" },
  {
    archetype: "Rushdown",
    code: "ELPHELT",
    name: "Elphelt Valentine",
    slug: "elphelt-valentine",
  },
  { archetype: "Unique", code: "A.B.A", name: "A.B.A", slug: "aba" },
  { archetype: "Power", code: "SLAYER", name: "Slayer", slug: "slayer" },
  { archetype: "Unique", code: "DIZZY", name: "Dizzy", slug: "dizzy" },
  { archetype: "Zoning", code: "VENOM", name: "Venom", slug: "venom" },
  { archetype: "Balance", code: "UNIKA", name: "Unika", slug: "unika" },
  { archetype: "Balance", code: "LUCY", name: "Lucy", slug: "lucy" },
  { archetype: "Rushdown", code: "JAM", name: "Jam", slug: "jam" },
];

const yt = (src: string) => ({ kind: "youtube" as const, src });
const local = (src: string) => ({ kind: "local" as const, src });

const characterCopy: Record<string, CharacterCopy> = {
  aba: {
    bio:
      "Homunculo nacido en un laboratorio llamado Flask. Llama Paracelsus a un hacha con forma de llave y lo trata como su esposo. Por crecer sola, es extremadamente timida con personas nuevas. Aun es inmadura emocionalmente y muestra celos y posesividad intensos hacia Paracelsus. Puede parecer agresiva, pero eso cubre su timidez; en el fondo conserva consideracion y simpatia por otros. Viaja para encontrar un cuerpo humano para Paracelsus y ahora investiga los cambios recientes en su forma.",
    hotTake: "Homunculo aferrada con amor",
    referenceVideo: yt("DMpZGepAo-k"),
    subtext: "Llama de celos que lo consume todo.",
    trailerVideo: yt("mQM6Oq5OkBk"),
  },
  "anji-mito": {
    bio:
      "Uno de los pocos japoneses sobrevivientes. Es apasionado y suele actuar por intuicion mas que por razon. Sus acciones pueden parecer directas y poco previsoras, pero no es optimista ingenuo: solo no es muy cuidadoso. No predica su sentido de justicia, aunque muestra abiertamente disgusto por lo que considera torcido o injusto. A veces parece burlarse de otros, pero lo hace con buena intencion.",
    hotTake: "Bailarin marcial elegante",
    referenceVideo: yt("V-AuWP9gQao"),
    subtext: "Sus pasos elegantes evaden ataques mientras contraataca.",
    trailerVideo: yt("Mkiua6E3s7o"),
  },
  "asuka-r-sharp": {
    bio:
      "Esta en la cima incluso entre usuarios de magia altamente capaces. Es cientifico y maestro sin igual de la magia: un genio. Aunque suele ser cortes y humilde, incluso sus frases cuidadosamente pensadas pueden causar conflicto. En contraste con su intelecto, su resistencia fisica es muy baja, asi que tareas exigentes las realizan bits hechos a medida. Desde el espacio transmite clear numbers con la esperanza de traer paz a la Tierra.",
    hotTake: "Maestro de hechiceria",
    referenceVideo: yt("tx9q-zGbLfw"),
    subtext: "Reza por la acumulacion de buena voluntad.",
    trailerVideo: yt("Gk9a5tQ_NGc"),
  },
  "axl-low": {
    bio:
      "Un joven del siglo XX con la habilidad de manipular el tiempo. Es optimista, no se toma las cosas demasiado en serio y prefiere fluir con la situacion. Es compasivo hasta el extremo y no puede ignorar a alguien en problemas. Detesta la idea misma de la muerte y nunca recurriria a quitar una vida, sin importar la situacion.",
    hotTake: "Especialista de largo alcance",
    referenceVideo: yt("yA_wMM8AbBg"),
    subtext: "Ataca desde lejos; no puedes tocarlo.",
    trailerVideo: yt("MpiVAQcptKg"),
  },
  baiken: {
    bio:
      "Espadachina de ascendencia japonesa. Se enciende con facilidad y no duda en comenzar una pelea. Es de actuar antes de pensar, se apega a sus principios y no retrocede ante un desacuerdo hasta resolverlo. Aun asi, puede reconocer cuando la otra parte tiene razon. Su brazo derecho tiene armas ocultas y una protesis modificada para atacar. Juro vengarse de That Man tras perder a su familia y amigos en las Crusades.",
    hotTake: "Samurai despierta e inquebrantable",
    referenceVideo: yt("lxrsPZeBUnw"),
    subtext: "Usa la fuerza del rival como propia.",
    trailerVideo: yt("EsyJzQIqo84"),
  },
  bedman: {
    bio:
      "La cama sigue actuando por su cuenta despues de la muerte de Bedman gracias al programa que dejo en sus ultimos momentos. Delilah la recupera despues de que ayuda a detenerla cuando pierde el control. Actua principalmente para protegerla. Puede comunicarse de forma simple, pero conversaciones complejas o recuerdos cotidianos estan fuera de sus capacidades. Delilah, hermana de Bedman, llega al mundo real con poder enorme pero poca experiencia emocional, y la cama permanece a su lado protegiendola.",
    hotTake: "Maquina guardian propensa a errores",
    referenceVideo: yt("O6_Q8X7lVoE"),
    subtext: "Pelea sin importar su propia destruccion.",
    trailerVideo: yt("qU6CKLe3q24"),
  },
  bridget: {
    bio:
      "Nacio como uno de dos hijos gemelos varones de una familia multimillonaria, pero fue criada como hija por una supersticion local que condenaba a los gemelos varones. Para demostrar que esa supersticion era falsa, Bridget intento actuar como hombre y traer riqueza a casa. Como cazarrecompensas tuvo exito y la supersticion se debilito, pero eso la dejo sin objetivo. Ahora sigue trabajando como cazarrecompensas mientras busca un proposito.",
    hotTake: "Spinner libre y tramposa",
    referenceVideo: yt("wV_pdaiz7uU"),
    subtext: "Vuela sin restricciones dominando el yo-yo.",
    trailerVideo: yt("69VV0pH57XE"),
  },
  "chipp-zanuff": {
    bio:
      "Presidente del Eastern Chipp Kingdom. Es impulsivo, apasionado y pensar demasiado no es lo suyo. Pierde la paciencia con facilidad y sus palabras suelen sonar rudas. Ahora que intenta entrar en politica, aprendio modales y habilidades sociales basicas. Reconoce que tiene bordes asperos, pero acepta esas partes de si mismo.",
    hotTake: "Ninja de velocidad divina",
    referenceVideo: yt("T5ZbZaG26ZQ"),
    subtext: "Asalto supersonico abrumador.",
    trailerVideo: yt("Ztj84zdkBnc"),
  },
  dizzy: {
    bio:
      "Half-Gear nacida entre un Gear y una humana. Aunque al principio desconfiaba de los humanos, conocer personas amables la ayudo a superar esos sentimientos. Sincera y pura, ama la naturaleza y la humanidad, y detesta el conflicto. Tras vivir escondida, unirse a los Jellyfish Pirates, enamorarse de Ky y tener a Sin, ahora gobierna Vialattea junto a Ky. Todavia se acostumbra a sus deberes, pero encuentra plenitud cada dia.",
    hotTake: "Reina de compasion floreciente",
    referenceVideo: yt("QNi0c0VMf2c"),
    subtext: "Alas luminosas que guian el camino.",
    trailerVideo: yt("MrrvV0nQWkQ"),
  },
  "elphelt-valentine": {
    bio:
      "Una Valentine creada por la Universal Will. Ama los animales y la naturaleza, y no soporta ver a alguien solo. Se lanza de frente a cualquier problema protegida por un optimismo impenetrable. Tras la batalla con la Universal Will, trabaja en el castillo de Illyria, pero no logra adaptarse. Buscando hacer sonreir a la gente, encuentra su respuesta en un microfono y mantiene activa su banda Speothos Venaticus.",
    hotTake: "Tren bala de ensueno dulce",
    referenceVideo: yt("0YpdNXr6yHk"),
    subtext: "Enciende el impulso dentro de tu alma.",
    trailerVideo: yt("rhlZY4D8jlQ"),
  },
  faust: {
    bio:
      "Doctor oscuro con pasado e identidad envueltos en misterio. A veces dice cosas fuera de contexto, desarrolla teorias filosoficas o aconseja a otros sobre el camino a seguir. Sufrio un colapso mental por experiencias tragicas y se desestabiliza cuando recuerdos de esos eventos vuelven. En el fondo, sin embargo, es cuidadoso, amable y bastante sabio.",
    hotTake: "Doctor subterraneo",
    referenceVideo: yt("y9TZP9gJMcQ"),
    subtext: "Enganoso, enigmatico e incomprensible.",
    trailerVideo: yt("sfRCnQH4c-I"),
  },
  giovanna: {
    bio:
      "Oficial de la unidad especial que protege al presidente de Estados Unidos. Cuida sus palabras, pero su actitud la hace sonar ruda e irreverente. En el fondo tiene buenas intenciones y es especialmente amable con ninos y animales. En combate permite que su espiritu lobo Rei la posea, sorprendiendo con velocidad inhumana.",
    hotTake: "Agente secreto superpoderosa",
    referenceVideo: yt("9iHinojDtJI"),
    subtext: "Rushdown ofensivo al maximo.",
    trailerVideo: yt("2rcEsHXCW1Q"),
  },
  "goldlewis-dickinson": {
    bio:
      "Primer Secretary of Defense de la historia de Estados Unidos que tambien es militar activo. Su juicio y liderazgo, construidos con gran experiencia de combate, le dieron enorme popularidad y confianza. Su capacidad personal de pelea se dice equivalente a toda la seguridad de la Casa Blanca; su presencia sostiene la autoridad y seguridad del pais.",
    hotTake: "Secretario de defensa absoluta",
    referenceVideo: local("/videos/goldlewis algo mas.mp4"),
    subtext: "Fuerza bruta incomparable.",
    trailerVideo: yt("2PHDCksHVQo"),
  },
  "happy-chaos": {
    bio:
      "El Original, quien descubrio el Backyard y enseno magia a la humanidad. Tras absorber la mitad de I-No, cambio drasticamente y ahora carga con la esperanza humana de seguir viviendo. Cree que su existencia sera perdonada por una voluntad mayor cuando la humanidad pierda su humanidad. Para el, bien y mal tienen igual valor. Puede causar grandes incidentes o terminar del lado de la justicia.",
    hotTake: "Mesias roto pistolero",
    referenceVideo: yt("NUQ-Du0R8Ig"),
    subtext: "Restaurador de la humanidad.",
    trailerVideo: yt("fMrpVDYZCbU"),
  },
  "i-no": {
    bio:
      "Su forma de acercarse como si hablara con un viejo amigo puede hacerla parecer agradable. No duda en usar sus encantos para enganar, aunque no tiene verdadera disposicion para colaborar con nadie. Ve a los demas como seres inferiores dignos de burla, incluso That Man. Cuando algo o alguien la irrita o alarma, revela su temperamento violento.",
    hotTake: "Bruja hard rock",
    referenceVideo: yt("hXOlNum_sZA"),
    subtext: "Su ofensiva con hover dash es opresiva.",
    trailerVideo: yt("Hd2Q1g_U9o0"),
  },
  "jack-o": {
    bio:
      "Forma de vida artificial creada por Asuka R. Kreutz para impedir el regreso de Justice. Al fusionarse con el alma de Aria dentro de Justice, evito su despertar y restauro el alma de Aria en si misma. Pero la conciencia de Aria aun no se manifiesta por completo, dejando a Jack-O' en un estado inestable. Intenta verse fria y compuesta, pero actua de forma infantil cuando sus emociones la superan, por eso usa una mascara especial en batalla.",
    hotTake: "Marshal fighter hiperenergetica",
    referenceVideo: yt("_Audxh4hmac"),
    subtext: "Domina la batalla con un grupo de sirvientes.",
    trailerVideo: yt("vHyGBWFOU-0"),
  },
  jam: {
    bio:
      "Chef que pelea con sus propios punos. Es extremadamente terca y odia perder. Se irrita con facilidad, especialmente ante la indecision, aunque perdona rapido sus propias fallas. Puede sonar hipocrita, pero en realidad es realista y observa muy bien su entorno. Su habilidad casi inhumana nace de esa mirada practica, fe total en si misma y perseverancia. Tras perder otro restaurante, viaja con su puesto de comida buscando pistas junto a Usagi.",
    hotTake: "Chef de puno de hierro indomable",
    referenceVideo: local("/videos/jam algo mas.mp4"),
    subtext: "Fuego bajo, patadas altas.",
    trailerVideo: yt("Kfb8WIBDasI"),
  },
  johnny: {
    bio:
      "Lider de los Jellyfish Pirates y maestro del estilo Hirofumi. Es un forajido de talla mundial, pero vive bajo el lema de ayudar al debil y castigar al fuerte, lo que lo hizo popular. Es relajado y siempre listo para descansar, pero cuando la situacion se pone seria es el indicado. Nunca pierde la calma y suele romper tension con una broma. Rescata huerfanas de guerra y las lleva a su nave, queriendo a su tripulacion como familia.",
    hotTake: "Apostador nato",
    referenceVideo: yt("83lfNIJwDrs"),
    subtext: "Corta todo con un golpe invisible.",
    trailerVideo: yt("xKgzFJnYonU"),
  },
  "ky-kiske": {
    bio:
      "Es directo y completamente devoto a todo lo relacionado con el trabajo, las personas y sus propios valores. Su amor exagerado por la justicia y por ayudar a los debiles es ejemplar, casi excesivo. Sin embargo, tambien puede rechazar con demasiada fuerza lo que va contra reglas y orden. Desde que se convirtio en rey, su entusiasmo se transformo en una mentalidad mas amplia, capaz de considerar distintos puntos de vista. Aun asi, a veces actua con impulsividad, mostrando que una parte de el sigue siendo inmadura.",
    hotTake: "All-rounder absoluto",
    referenceVideo: yt("fYxxHLL3v_U"),
    subtext: "Maestro de una multitud de tecnicas.",
    trailerVideo: yt("wNGTV92Y4O4"),
  },
  "leo-whitefang": {
    bio:
      "Segundo rey del reino de Illyria. Aunque parece salvaje y desordenado, por dentro es muy cauteloso. Odia perder y tiene mucho orgullo, pero no escatima esfuerzo para resolver problemas. Creo su propio diccionario y disfruta redefinir palabras existentes usando personas y eventos reales.",
    hotTake: "All-rounder de espadas gemelas",
    referenceVideo: yt("JceoL1SKDwA"),
    subtext: "Presion aplastante desde su postura de espalda.",
    trailerVideo: yt("4q7P-aqLzpM"),
  },
  lucy: {
    bio:
      "Lucy llama la atencion por su aura misteriosa y cabello pastel degradado, pero su actitud fria mantiene a la mayoria a distancia. Hay poca informacion sobre ella, asi que su identidad y pasado son inciertos. En combate usa monowire, un arma cibernetica tipo latigo capaz de inmovilizar o desmembrar. Su agilidad y habilidades de hacking tambien son parte clave de su arsenal. Es una netrunner de Night City y, tras una inmersion profunda en la Net, algo extrano ocurrio.",
    hotTake: "Netrunner misteriosa",
    referenceVideo: yt("UNecAcrpaLI"),
    subtext: "Hacker elite, surfista del ciberespacio.",
    trailerVideo: yt("bU4sButXYqQ"),
  },
  may: {
    bio:
      "Es vivaz y no se preocupa por cosas pequenas. Es de las que actuan antes de pensar, y sus amigos suelen verse arrastrados por sus acciones. Aun asi, su actitud positiva es contagiosa y mantiene a su grupo avanzando incluso cuando el cansancio se les nota.",
    hotTake: "La chica imparable",
    referenceVideo: yt("I1NAF_n55DQ"),
    subtext: "Carga hacia adelante con energia vibrante.",
    trailerVideo: yt("-8iJ2lzX6lE"),
  },
  "millia-rage": {
    bio:
      "Es silenciosa y fria. Sin embargo, desde que dejo el Guild ya no trabaja solo por beneficio como antes. Al vivir entre personas comunes, comenzo a sentir una gama mas amplia de emociones. Puede no demostrarlo con palabras o acciones, pero ahora logra simpatizar con otros. Ante situaciones inciertas, incluso puede parecer una chica normal de su edad.",
    hotTake: "Asesina de cabello prohibido",
    referenceVideo: yt("qniTns4Os8Q"),
    subtext: "Parpadea una vez y se acabo.",
    trailerVideo: yt("7qsc2ydmLSM"),
  },
  nagoriyuki: {
    bio:
      "Vampiro samurai de gran complexión. Ademas de su enorme cuerpo y habilidades de combate sobresalientes, posee las capacidades inquietantes de un vampiro.",
    hotTake: "Noble samurai vampiro",
    referenceVideo: yt("PaF-zT_V_MI"),
    subtext: "Su espada chupasangre entrega un golpe devastador.",
    trailerVideo: yt("vK-3vF0HgGw"),
  },
  potemkin: {
    bio:
      "Soldado del Independent Airborne State of Zepp. Es orgulloso y de corazon leal. Su tamano lo hace parecer intimidante, pero es un hombre gentil que ama la naturaleza. Valora el deber sobre todo; puede soportar su propio dolor, pero no tolera ver sufrir a otros. Enfrenta la adversidad de frente y se niega a ser usado como herramienta para hacer dano.",
    hotTake: "Fortaleza movil",
    referenceVideo: local("/videos/potemkim algo mas.mp4"),
    subtext: "Si caes en sus manos, se acaba el juego.",
    trailerVideo: yt("LcYNqLwkM8I"),
  },
  "ramlethal-valentine": {
    bio:
      "Una Valentine, forma de vida creada a imagen de la humanidad. Siguiendo ordenes implantadas por su madre, declaro la guerra contra los humanos. Sin embargo, al interactuar con Sol y los demas, conocio las emociones y termino convirtiendose en aliada de la humanidad.",
    hotTake: "Brigadier de media distancia",
    referenceVideo: yt("Q-KvurPEgDM"),
    subtext: "Portadora de dos espadas gigantes.",
    trailerVideo: yt("a_BwHtr-87U"),
  },
  "sin-kiske": {
    bio:
      "Hijo de Ky Kiske y Dizzy, lo que lo hace un cuarto Gear. Ky lo confio a Sol para evitar atencion indeseada por su crecimiento acelerado causado por sangre Gear. La educacion de Sol se inclino demasiado hacia la supervivencia, dejando a Sin fuerte, travieso y algo flojo en lo academico. Aunque no lo parezca, tiene menos de diez anos y aun es mentalmente inmaduro. Es optimista y piensa de forma simple, lo que a veces le permite encontrar soluciones inesperadas.",
    hotTake: "Chico salvaje en crecimiento",
    referenceVideo: yt("hLXRUgFqLJ0"),
    subtext: "Persigue a su presa con su bandera de gran alcance.",
    trailerVideo: yt("oplsTzYt71k"),
  },
  slayer: {
    bio:
      "Caballero descendiente de vampiros, amante del combate autentico y del haiku. Vive segun su codigo de dandyism y puede tomar casi todo con calma. En batalla, sin embargo, usa una fuerza abrumadora en contraste con su actitud serena. Por su vida longeva, los eventos humanos pueden parecerle triviales, pero tambien encuentra en las emociones humanas algo envidiable y adorable. Fundo el Assassin's Guild y se retiro tras conocer a Sharon.",
    hotTake: "Vampiro relajado y digno",
    referenceVideo: yt("oWdxOrNph54"),
    subtext: "Sus punos definen el dandismo.",
    trailerVideo: yt("uh4Ic2hGoGA"),
  },
  "sol-badguy": {
    bio:
      "Un hombre brusco y de mal caracter. Solo habla cuando hace falta y usa la menor cantidad de palabras posible. No es bueno explicando las cosas, asi que prefiere expresarse con su conducta agresiva y su actitud. Aunque muchos lo ven como egoista y violento, quienes estan cerca de el lo aceptan tal como es.",
    hotTake: "El golpeador despiadado",
    referenceVideo: yt("mXYhQmbQXpY"),
    subtext: "Abruma a todos sus rivales con fuerza salvaje.",
    trailerVideo: yt("gp4-n_u-qM0"),
  },
  testament: {
    bio:
      "Testament fue humano antes de ser modificado quirurgicamente en Gear. Bajo control del Conclave trabajo para revivir a Justice, pero tras el Second Holy Order Selection Tournament recupero su voluntad. Culpable, se escondio en el Forest of Demons y decidio proteger a Dizzy. Aunque empezo como forma de expiar sus pecados, termino devolviendole sensibilidad humana. Ahora vive con la pareja anciana que cuido de Dizzy y disfruta una vida tranquila.",
    hotTake: "Grim Reaper elegante",
    referenceVideo: yt("9qzct2NrJm0"),
    subtext: "Guadana carmesi que baila con encanto.",
    trailerVideo: yt("d1NTpgzhXAY"),
  },
  unika: {
    bio:
      "Chica del futuro posterior a la destruccion de las Second Crusades. Hija de Ky y Dizzy, hereda sangre Gear como Sin. En un futuro arruinado, Nerville la encuentra aun en su huevo y la cria para obedecerlo. Viaja al pasado convencida de que asi salvara el mundo, pero al conocer a Sin y Bridget sus sentimientos vacilan. Tras separarse de Nerville, viaja bajo supervision de Estados Unidos, aprendiendo sobre la paz, los demas y ella misma.",
    hotTake: "Super novata con arma truco",
    referenceVideo: yt("jScxTXM11uo"),
    subtext: "Trueno resonante sin mancha.",
    trailerVideo: yt("cVAqSQ6xBQo"),
  },
  venom: {
    bio:
      "Hombre gentil y honesto que apenas puede mentir. Su forma de hablar parece rigida y racional, pero valora la emocion, la empatia y la humildad. Tras la batalla con Bedman, el lider Venom muere para el mundo exterior. Robo-Ky salva su vida, y Zato le da la tienda donde abre su panaderia. En esa vida aprende de una batalla distinta: una donde la gente pelea por orgullo, no por quitar vidas. Asi nace su nueva batalla: panadero de dia, castigador misterioso de noche.",
    hotTake: "Fantasma billar purpura",
    referenceVideo: yt("zqasSYEuQ1k"),
    subtext: "Perseguidor implacable en la oscuridad.",
    trailerVideo: yt("RrfRMIa5VaI"),
  },
  "zato-1": {
    bio:
      "Lider de una antigua organizacion de asesinos, revivido despues de conocer la muerte. Antes de resucitar era calmado y reflexivo, pero tras ese evento se volvio impasible. No encuentra significado en su vida, ni puede sentir bien, mal, alegria o ira. Lo unico que siente es el torrente de emociones hacia Millia.",
    hotTake: "Guerrero tecnico de sombras",
    referenceVideo: yt("Ppct7o8Eq_A"),
    subtext: "Ofensiva sofocante junto a su sombra.",
    trailerVideo: yt("5OfIZ3gJmAM"),
  },
};

function buildCharacter(seed: CharacterSeed): Character {
  const copy = characterCopy[seed.slug] ?? {
    bio: `${seed.name} aun necesita una ficha completa, pero ya funciona como ejemplo de como Strive convierte personalidad, silueta y plan de juego en una identidad clara.`,
    hotTake: seed.archetype,
    subtext: `${seed.archetype} fighter con identidad visual y mecanica propia.`,
  };

  return {
    ...seed,
    ...copy,
    chibiSrc: `/characters/${seed.slug}/chibi.png`,
    portraitSrc: `/characters/${seed.slug}/portrait.png`,
    short: `${copy.hotTake}. ${copy.subtext}`,
    why: `${seed.name} sirve para explicar como Guilty Gear Strive convierte identidad visual en gameplay: silueta clara, plan de juego reconocible y una fantasia de combate propia.`,
    stats: archetypeStats[seed.archetype],
  };
}

export const characters = seeds.map(buildCharacter);
