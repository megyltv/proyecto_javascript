/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     14/12/2016 14:21:10                          */
/*==============================================================*/


drop index RELATIONSHIP_6_FK;

drop index PRESENTA_FK;

drop index COMENTARIOS_PK;

drop table COMENTARIOS;

drop index RELATIONSHIP_5_FK;

drop index CONTIENE_FK;

drop index FRASES_PK;

drop table FRASES;

drop index LIBRO_PK;

drop table LIBRO;

drop index RELATIONSHIP_4_FK;

drop index TIENE_FK;

drop index RESENA_PK;

drop table RESENA;

drop index USUARIO_PK;

drop table USUARIO;

/*==============================================================*/
/* Table: COMENTARIOS                                           */
/*==============================================================*/
create table COMENTARIOS (
   IDCOMENTARIO         INT4                 not null,
   IDLIBRO              INT4                 not null,
   IDUSUARIO            INT4                 not null,
   NOMBRE               VARCHAR(20)          not null,
   COMENTARIO           VARCHAR(200)         not null,
   constraint PK_COMENTARIOS primary key (IDCOMENTARIO)
);

/*==============================================================*/
/* Index: COMENTARIOS_PK                                        */
/*==============================================================*/
create unique index COMENTARIOS_PK on COMENTARIOS (
IDCOMENTARIO
);

/*==============================================================*/
/* Index: PRESENTA_FK                                           */
/*==============================================================*/
create  index PRESENTA_FK on COMENTARIOS (
IDLIBRO
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_6_FK on COMENTARIOS (
IDUSUARIO
);

/*==============================================================*/
/* Table: FRASES                                                */
/*==============================================================*/
create table FRASES (
   IDFRASE              INT4                 not null,
   IDUSUARIO            INT4                 null,
   IDLIBRO              INT4                 not null,
   PERSONAJE            VARCHAR(15)          null,
   FRASE                VARCHAR(100)         null,
   constraint PK_FRASES primary key (IDFRASE)
);

/*==============================================================*/
/* Index: FRASES_PK                                             */
/*==============================================================*/
create unique index FRASES_PK on FRASES (
IDFRASE
);

/*==============================================================*/
/* Index: CONTIENE_FK                                           */
/*==============================================================*/
create  index CONTIENE_FK on FRASES (
IDLIBRO
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_5_FK on FRASES (
IDUSUARIO
);

/*==============================================================*/
/* Table: LIBRO                                                 */
/*==============================================================*/
create table LIBRO (
   IDLIBRO              INT4                 not null,
   NOMBRE               VARCHAR(20)          not null,
   AUTOR                VARCHAR(20)          null,
   NUMPAGINAS           INT4                 not null,
   FECHACREACION        DATE                 null,
   CATEGORIA            VARCHAR(20)          null,
   LIKES                INT4                 null,
   constraint PK_LIBRO primary key (IDLIBRO)
);

/*==============================================================*/
/* Index: LIBRO_PK                                              */
/*==============================================================*/
create unique index LIBRO_PK on LIBRO (
IDLIBRO
);

/*==============================================================*/
/* Table: RESENA                                                */
/*==============================================================*/
create table RESENA (
   IDRESENA             INT4                 not null,
   IDUSUARIO            INT4                 not null,
   IDLIBRO              INT4                 not null,
   DESCRIPCION          VARCHAR(500)         null,
   CALIFICACION         INT4                 null,
   LIKES                INT4                 null,
   constraint PK_RESENA primary key (IDRESENA)
);

/*==============================================================*/
/* Index: RESENA_PK                                             */
/*==============================================================*/
create unique index RESENA_PK on RESENA (
IDRESENA
);

/*==============================================================*/
/* Index: TIENE_FK                                              */
/*==============================================================*/
create  index TIENE_FK on RESENA (
IDLIBRO
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_4_FK on RESENA (
IDUSUARIO
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   IDUSUARIO            INT4                 not null,
   NOMBRE               VARCHAR(20)          not null,
   NICK_NAME            VARCHAR(20)          not null,
   CLAVE                VARCHAR(15)          not null,
   CORREO               VARCHAR(50)          null,
   INTERESES            VARCHAR(100)         null,
   constraint PK_USUARIO primary key (IDUSUARIO)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
IDUSUARIO
);

alter table COMENTARIOS
   add constraint FK_COMENTAR_PRESENTA_LIBRO foreign key (IDLIBRO)
      references LIBRO (IDLIBRO)
      on delete restrict on update restrict;

alter table COMENTARIOS
   add constraint FK_COMENTAR_RELATIONS_USUARIO foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO)
      on delete restrict on update restrict;

alter table FRASES
   add constraint FK_FRASES_CONTIENE_LIBRO foreign key (IDLIBRO)
      references LIBRO (IDLIBRO)
      on delete restrict on update restrict;

alter table FRASES
   add constraint FK_FRASES_RELATIONS_USUARIO foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO)
      on delete restrict on update restrict;

alter table RESENA
   add constraint FK_RESENA_RELATIONS_USUARIO foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO)
      on delete restrict on update restrict;

alter table RESENA
   add constraint FK_RESENA_TIENE_LIBRO foreign key (IDLIBRO)
      references LIBRO (IDLIBRO)
      on delete restrict on update restrict;

