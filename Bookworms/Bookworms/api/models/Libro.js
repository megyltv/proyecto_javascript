/**
 * Libro.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    resenias:{
      collection:'Resenia',
      via:'idLibro'
    },
    comentarios:{
      collection:'Comentario',
      via:'idLibro'
    },
    frases:{
      collection:'Frases',
      via:'idLibro'
    },
    comprar:{
      collection:'Compra',
      via:'idLibro'
    }
  }
};

