/* =========================================================================
   DATOS DEL CATÁLOGO — BETANIA SHOES
   =========================================================================
   Este es el ÚNICO archivo que necesitas editar para:
     - cambiar tu marca, WhatsApp, Instagram, precio o tallas
     - agregar una foto nueva a una categoría que ya existe
     - crear una categoría nueva
   No necesitas tocar el archivo catalogo-bailarinas.html para nada de esto.

   Después de editar este archivo, para ver los cambios:
     - Ábrelo con doble clic si lo tienes en tu computadora, o
     - Súbelo de nuevo a GitHub Pages / Netlify si ya lo tienes publicado.

   CUIDADO con la puntuación: cada línea de datos va entre llaves { } y
   termina en coma, tal como en los ejemplos de abajo. Si borras una coma
   o una comilla el catálogo puede dejar de funcionar — si eso pasa, revisa
   que cada línea se vea igual de "pareja" que las demás.
   ========================================================================= */

var CATALOGO = {

  // --- 1. TU MARCA ------------------------------------------------------
  marca: {
    nombre: 'Betania Shoes',
    lema: 'Calzado femenino · Lima, Perú',
    whatsapp: '51912444453',       // solo números, con código de país (51 = Perú)
    instagram: '@betania.shoes',
    pagos: 'Yape, Plin, transferencia',
    anioCopyright: '2026'
  },

  // --- 2. PRECIO Y TALLAS POR DEFECTO ------------------------------------
  // Este precio se usa en TODOS los productos que no tengan su propio campo
  // "precio" (ver más abajo, en la sección 4, cómo poner un precio distinto
  // a un modelo en particular). Lo mismo para "tallas".
  precio: 38.00,
  tallasGenerales: '35 – 40',
  rangoTallasDestacado: '35–40', // el que se ve arriba en las estadísticas

  // --- 3. CATEGORÍAS ------------------------------------------------------
  // Cada categoría necesita: id (sin espacios ni tildes), nombre (lo que se
  // ve en el menú y los filtros) y descripcion (subtítulo chiquito).
  //
  // PARA AGREGAR UNA CATEGORÍA NUEVA: copia un bloque { ... } completo,
  // pégalo antes del "]" que cierra la lista, y cambia sus datos.
  //
  // Si una categoría se muestra con UNA sola foto que representa VARIOS
  // colores (como "Correas cruzadas"), agrégale la parte "banner" (mira el
  // ejemplo de 'correas' más abajo). Si cada color tiene su propia foto,
  // NO le pongas "banner" — solo agrega sus fotos en la lista de productos.
  // Un "banner" también puede tener su propio "precio" (si no lo pones,
  // usa el precio general de arriba).
  categorias: [
    { id:'mono', nombre:'Modelo Xiomi', descripcion:'Nuestro modelo estrella, con correa y hebilla en el tobillo' },
    { id:'mono-solo', nombre:'Moño', descripcion:'El clásico de un solo cuerpo, sin correa' },
    { id:'lunares', nombre:'Lunares', descripcion:'El estampado más coqueto de la temporada' },
    {
      id:'tejido', nombre:'Tejido y yute', descripcion:'Textura natural con acabado artesanal',
      banner: {
        foto:'imgs/yute-banner.jpg',
        titulo:'Balerina Tejido con Moño',
         precio: 40.00,
        descripcion:'Cuerpo tejido tipo yute con moño de charol y correa de hebilla. Disponible en:',
        colores:['Negro','Vino','Camel'],
        alt:'Balerinas tejidas tipo yute con moño, en negro, vino y camel'
      }
    },
    { id:'encaje', nombre:'Encaje', descripcion:'Delicadas y románticas, ideales para ocasiones especiales' },
    { id:'mules', nombre:'Mules', descripcion:'Sin talón, para looks relajados y de fiesta' },
    {
      id:'correas', nombre:'Correas cruzadas', descripcion:'Un modelo, seis colores para elegir',
      banner: {
        foto:'imgs/correas-cruzadas-banner.jpg',
        titulo:'Balerina Correas Cruzadas',
        descripcion:'Diseño con doble correa cruzada y hebillas, punta afilada. Disponible en:',
        colores:['Leopardo','Marrón','Negro charol','Beige','Rojo','Blanco'],
        alt:'Balerinas de correas cruzadas en leopardo, marrón, negro charol, beige, rojo y blanco'
      }
    }
  ],

  // --- 4. PRODUCTOS (cada foto individual) --------------------------------
  // Cada producto necesita: categoria (el "id" de una categoría de arriba),
  // nombre, y foto (la ruta a la imagen dentro de la carpeta imgs/).
  // El campo "tallas" es OPCIONAL — solo agrégalo si ese modelo tiene
  // tallas distintas a las generales (como pasa con Mules, que es 35–40).
  //
  // PARA PONERLE UN PRECIO DISTINTO A UN MODELO:
  //   Agrégale el campo "precio" a esa línea, por ejemplo:
  //     { categoria:'mono', nombre:'Balerina Xiomi Negro', foto:'imgs/xiomi-negro.jpg', precio: 42.00 }
  //   Si un producto NO tiene "precio", usa el precio general de arriba (38.00).
  //   Puedes cambiarle el precio a uno solo, a varios, o a todos — como prefieras.
  //
  // PARA AGREGAR UN COLOR NUEVO a una categoría que ya existe:
  //   1) Guarda la foto dentro de la carpeta imgs/ (dale un nombre sin
  //      espacios, por ejemplo: imgs/xiomi-morado.jpg)
  //   2) Copia una línea { ... } de esa misma categoría y pégala,
  //      cambiando el nombre y la foto.
  productos: [
    { categoria:'mono', nombre:'Balerina Xiomi Negro', foto:'imgs/xiomi-negro.jpg' },
    { categoria:'mono', nombre:'Balerina Xiomi Marrón', foto:'imgs/xiomi-marron.jpg' },
    { categoria:'mono', nombre:'Balerina Xiomi Vino', foto:'imgs/xiomi-vino.jpg' },
    { categoria:'mono', nombre:'Balerina Xiomi Blanco', foto:'imgs/xiomi-blanco.jpg' },
    { categoria:'mono', nombre:'Balerina Xiomi Nude', foto:'imgs/xiomi-beige.jpg' },

    { categoria:'mono-solo', nombre:'Balerina Rosa Pastel', foto:'imgs/mono-rosa-pastel.jpg' },
    { categoria:'mono-solo', nombre:'Balerina Beige Moño', foto:'imgs/mono-beige.jpg' },
    { categoria:'mono-solo', nombre:'Balerina Vino Moño', foto:'imgs/mono-vino2.jpg' },
    { categoria:'mono-solo', nombre:'Balerina Corazón Perla', foto:'imgs/mono-corazon-perla.jpg' },
    { categoria:'mono-solo', nombre:'Balerina Moño Charol Beige', foto:'imgs/mono-charol-beige.jpg' },
    { categoria:'mono-solo', nombre:'Balerina Charol Vino', foto:'imgs/mono-charol-vino.jpg' },

    { categoria:'lunares', nombre:'Balerina Lunares Negro', foto:'imgs/lunares-negro.jpg' },
    { categoria:'lunares', nombre:'Balerina Lunares Blanco', foto:'imgs/lunares-blanco.jpg' },
    { categoria:'lunares', nombre:'Balerina Lunares Vino', foto:'imgs/lunares-vino.jpg' },
    { categoria:'lunares', nombre:'Balerina Lunares Negro Satinado', foto:'imgs/lunares-negro2.jpg' },

    { categoria:'tejido', nombre:'Balerina Tejido Verde', foto:'imgs/tejido-verde.jpg', precio: 40.00 },
    { categoria:'tejido', nombre:'Balerina Tejido Lila', foto:'imgs/tejido-lila.jpg', precio: 40.00 },
     

    { categoria:'encaje', nombre:'Balerina Encaje Negro', foto:'imgs/encaje-negro.jpg', precio: 40.00  },
    { categoria:'encaje', nombre:'Balerina Encaje Blanco', foto:'imgs/encaje-blanco.jpg', precio: 40.00  },

    { categoria:'mules', nombre:'Mule Encaje Dorado', foto:'imgs/mule-dorado.jpg', tallas:'35 – 40', precio: 40.00  },
    { categoria:'mules', nombre:'Mule Encaje Rojo', foto:'imgs/mule-rojo.jpg', tallas:'35 – 40', precio: 40.00  }
  ]
};
