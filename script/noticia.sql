create database portal_noticias;

use portal_noticias;

create table noticias(id int not null primary key auto_increment,
titulo varchar(100),
noticia text,
data_criacao timestamp default current_timestamp);


insert into noticias (titulo, noticia) values ('titulo da noticia', 'conteudo da noticia');

commit;