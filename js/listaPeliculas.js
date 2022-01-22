const listaPeliculas = [
    {
        nombre: "Capone",
        imgUrl: "./img/capone.png",
        descripcion:
            "Un lustro después de la debacle de 'Cuatro fantásticos', Josh Trank vuelve al ataque con un proyecto completamente diferente: un retrato violento y descarnado de Al Capone, al que da vida un completamente enloquecido Tom Hardy. La película nos sitúa en un momento de la vida del famoso gángster, justo después de haber pasado una década en prisión y cuando empieza a sufrir demencia. El pasado vuelve para atormentarle, y Trank nos lo muestra con una visceralidad que a veces funciona, y otras se pasa de frenada.",
    },
    {
        nombre: "Cruella",
        imgUrl: "./img/cruella.PNG",
        descripcion:
            "Disney sigue explorando las vidas de sus villanos más icónicos, y ahora es el turno de Cruella de Vil, que empezó siendo una huérfana en las calles de Londres y una feroz aspirante a diseñadora de moda en los años 70. Con estética punk y mucho sentido del humor, Craig Gillespie ('Yo, Tonya') dirige este 'spin-off' protagonizado por una brillante Emma Stone, que consigue vender una propuesta complicada junto a su némesis (y tocaya) Emma Thompson.",
    },
    {
        nombre: "Ejercito de los Muertos",
        imgUrl: "./img/ejercitoMuertos.PNG",
        descripcion:
            "Casi veinte años después de ‘Amanecer de los muertos’, Zack Snyder vuelve a los zombies con esta película de Netflix, donde se mezclan las claves del género y la 'heist movie' para crear una aventura de acción a la que le falta pulso y le sobran minutos. Con Dave Bautista de protagonista junto a Ella Purnell, Ana de la Reguera, Theo Rossi y Tig Notaro en su reparto, la historia sigue a un grupo que se debe infiltrar en la infestada ciudad de Las Vegas para robar el botín de un casino antes de que el gobierno lance una bomba nuclear sobre el lugar para acabar con la amenaza de los muertos vivientes. Pero toda esta sustanciosa premisa no se traslada en una película épica y dinámica, sino en una más bien formulaica y falta de nervio narrativo.",
    },
    {
        nombre: "Expediente Warrem",
        imgUrl: "./img/expedinteWarrem.PNG",
        descripcion:
            "La tercera aventura en la gran pantalla del matrimonio Warren (interpretado por Vera Farmiga y Patrick Wilson) ha notado la falta de su director original, James Wan. Siguen ofreciendo lo que se espera de ellos: muchos sustos de infarto, fenómenos paranormales y amor matrimonial infranqueable. Pero algo ha faltado en esta tercera entrega de la saga, que ya se ramifica en diversos 'spin-off'. Aquí, Ed y Lorraine Warren deberán afrontar un nuevo caso, en el que un hombre es acusado de asesinato tras haber sido poseído por un demonio.",
    },
    {
        nombre: "Free Guy",
        imgUrl: "./img/freeGuy.PNG",
        descripcion:
            "Ryan Reynolds interpreta a un trabajador de un banco que descubre que en realidad es un jugador dentro de un videojuego. ¡Eso sí que es un drama existencial! La inteligencia artificial se ha desarrollado en este mundo virtual gracias a los descubrimientos de sus creadores originales (Jodie Comer y Joe Keery), que desde el mundo real lucharán por recuperar lo que es suyo. Dirigida por Shawn Levy, esta película ofrece lo que promete (acción, comedia, algo de romance), pero no ambiciona nada más.",
    },
    {
        nombre: "Godzilla vs Kong",
        imgUrl: "./img/godzillaKong.PNG",
        descripcion:
            "Hace años que se venía gestando uno de los enfrentamientos más épicos de todos los tiempos, entre dos de los monstruos más icónicos de la historia del cine. Godzilla, que viene directamente desde 'Godzilla: Rey de los monstruos', y King Kong, que venía de 'Kong: Skull Island', se enfrentan en una batalla épica en esta película dirigida por Adam Wingard, todo un éxito de taquilla que ha revitalizando un 'Monsterverse' que estaba ya agonizando. El resultado es un entretenimiento de golpes fuertes y edificios destrozados, donde si la historia tiene sentido o los humanos están sobreactuados no importa tanto como dejarse llevar por el espectáculo CGI.",
    },
    {
        nombre: "La Pintora y el Ladron",
        imgUrl: "./img/laPintorayLadron.PNG",
        descripcion:
            "Este documental noruego de Benjamin Ree contiene una de las historias más fascinantes del año. La pintora naturalista checa Barbora Kysilkova entabla una relación con un hombre que participó en el robo de sus obras, Karl-Bertil Nordland, al que decide dedicar una serie de retratos, y él acepta. Un relato sobre la amistad y la conexión entre dos personas que no parecían destinadas a relacionarse.",
    },
    {
        nombre: "Mortal Kombat",
        imgUrl: "./img/mortalKombat.PNG",
        descripcion:
            "El famoso videojuego vuelve a la gran pantalla por tercera vez, y las tortas y la violencia están aseguradas. No en vano ha sido calificado como no recomendada para menores de 18 años, y con razón: la película de Simon McQuoid no se corta un pelo a la hora de mostrar la violencia llevada al extremo con sus luchas trepidantes. Como tiene que ser. El resultado es una aventura de acción no apta para estómagos sensibles, pero que da todo el entretenimiento y violencia lúdica que los fans estaban buscando. Esta adaptación ha tardado en llegar, pero la espera ha valido la pena.",
    },
    {
        nombre: "Una noche en Miami",
        imgUrl: "./img/nocheMiami.PNG",
        descripcion:
            "Basada en la obra de teatro de Kemp Powers y dirigida por la actriz Regina King, que debuta en la dirección, esta película nos lleva a una reunión de grandes iconos: el boxeador Cassius Clay (más adelante conocido como Muhammad Ali), el líder activista Malcolm X, el cantante Sam Cooke y el deportista Jim Brown se encierran en la habitación de un motel en 1964 para discutir sobre las diferentes formas en que cada uno lucha por los derechos de la comunidad afroamericana. El resultado es muy discursivo y fascinante.",
    },
    {
        nombre: "Nuevo Orden",
        imgUrl: "./img/nuevoOrden.PNG",
        descripcion:
            "Gran Premio del Jurado en la pasada edición del Festival de Venecia, esta nueva película del mexicano Michel Franco vuelve a llevar a la pantalla el mensaje de 'Eat the rich' en una distopía brutal y violenta sobre una rebelión contra las clases privilegiadas. Todo sucede en una boda de una familia rica, que de pronto se ve asaltada por los disturbios de las clases pobres, pero la violencia descarnada que vivimos en ese escenario solo es el principio de una historia que llega mucho más lejos en su reflexión. Es una película provocadora, cruda y difícil de ver. Así de cerca está de la realidad del mundo.",
    },
    {
        nombre: "Reminiscencia",
        imgUrl: "./img/reminiscencia.PNG",
        descripcion:
            "La cocreadora de la serie 'Westworld', Lisa Joy, escribe y dirige este thriller futurista protagonizado por Hugh Jackman, Thandiwe Newton y Rebecca Ferguson. Su planteamiento es apasionante: nos lleva a unos Estados Unidos distópicos donde Miami está sumergida, donde los ricos pueden comprar la 'tierra seca' y los pobres sobreviven rodeados de agua, y donde un investigador privado tiene la habilidad de ayudar a sus clientes a recuperar sus recuerdos perdidos. Quizás el problema de la película sea no conseguir encontrar nada 100% original en su historia.",
    },
    {
        nombre: "Snake Eyes: El origen",
        imgUrl: "./img/snakeEyes.PNG",
        descripcion:
            "Este spin-off de 'G.I. Joe' se centra en la historia de los orígenes de Snake Eyes (Henry Golding), el ninja silencioso siempre vestido de negro y del que no se conoce el rostro, y cómo intenta convertirse en miembro del clan Arashikage. Junto a él conoceremos otros personajes como La baronesa (Úrsula Corberó) y su archienemigo Storm Shadow (Andrew Koji). Por desgracia, la película no da todo lo que promete, la acción queda deslavazada y no consigue exprimir todo su potencial.",
    },
];
