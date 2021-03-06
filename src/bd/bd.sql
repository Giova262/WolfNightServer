
/*Ususarios*/
CREATE TABLE IF NOT EXISTS "users" (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	"nickname" TEXT NOT NULL ,
	"mail" TEXT NOT NULL ,
	"pass" TEXT NOT NULL ,
	"foto" TEXT NOT NULL ,
	"L" BOOLEAN NULL DEFAULT NULL ,
    "M" BOOLEAN NULL DEFAULT NULL ,
    "MI" BOOLEAN NULL DEFAULT NULL ,
    "J" BOOLEAN NULL DEFAULT NULL ,
    "V" BOOLEAN NULL DEFAULT NULL ,
    "S" BOOLEAN NULL DEFAULT NULL ,
    "D" BOOLEAN NULL DEFAULT NULL ,
    "HL" TEXT NOT NULL ,
    "HM" TEXT NOT NULL ,
    "HMI" TEXT NOT NULL ,
    "HJ" TEXT NOT NULL ,
    "HV" TEXT NOT NULL ,
    "HS" TEXT NOT NULL ,
    "HD" TEXT NOT NULL ,
	"token" TEXT NOT NULL
);
 
INSERT INTO "users" ( "nickname", "mail", "pass","foto","L","M","MI","J","V","S","D","HL","HM","HMI","HJ","HV","HS","HD","token") VALUES
	
	( E'Giova', E'masterpat45@gmail.com', E'123','foto.png',TRUE,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,18,'18:00','18:00','18:00','18:00','18:00','18:00','TOKEN');


/*Personajes*/
CREATE TABLE IF NOT EXISTS "characters" (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	"id_user" INTEGER NULL DEFAULT NULL ,
	"nombre" TEXT NOT NULL ,
	"clase" TEXT NOT NULL ,
	"nivel" INTEGER NULL DEFAULT NULL ,
    "arma" TEXT NOT NULL ,
    "armadura" TEXT NOT NULL ,
    "botas" TEXT NOT NULL ,
    "guantes" TEXT NOT NULL ,
    "cinturon" TEXT NOT NULL ,
    "rankeado" BOOLEAN NULL DEFAULT NULL 
);

INSERT INTO "characters" ( "id_user", "nombre", "clase","nivel","arma","armadura","botas","guantes","cinturon","rankeado") VALUES
	
	( 5, E'Homero', E'Lancer',25,E'low',E'low',E'low',E'low',E'low',FALSE);


/*Eventos*/
CREATE TABLE IF NOT EXISTS "events" (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "name_user" TEXT NOT NULL ,
	"titulo" TEXT NOT NULL ,
	"time" TEXT NOT NULL ,
	"descripcion" TEXT NOT NULL 
);

INSERT INTO "events" ( "name_user","titulo", "time", "descripcion") VALUES
	
	( E'PEPE',E'GVG', E'12/27/2019 18:29:00',E'Si se quedan afk vayan a velika');

/*Log*/
CREATE TABLE IF NOT EXISTS "logs" (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	"id_user" INTEGER NULL DEFAULT NULL ,
	"accion" TEXT NOT NULL ,
    "ip" TEXT NOT NULL,
	"time" TEXT NOT NULL 
);

INSERT INTO "logs" ( "id_user", "accion", "ip","time") VALUES
	
	( 1, E'crear evento',E'192.168.1.1',E'12/27/2019 18:29:00');


/*Guias*/
CREATE TABLE IF NOT EXISTS "guias" (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	"id_user" INTEGER NULL DEFAULT NULL ,
	"titulo" TEXT NOT NULL ,
    "url" TEXT NOT NULL,
	"descripcion" TEXT NOT NULL,
	"categoria" TEXT NOT NULL  
);

INSERT INTO "guias" ( "id_user", "titulo", "url","descripcion","categoria") VALUES
	
	( 1, E'Gunner guia PvE',E'https://essentialmana.com/gunner-pve-guide/',E'fuente esentialmana.com',E'Gunner');
