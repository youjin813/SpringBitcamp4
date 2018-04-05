create table admin(
adm_id varchar(20) primary key,
adm_pass varchar(20)
);
insert into admin (adm_id,adm_pass) values('12345','12345');

create table Admin(
   admid varchar(20) primary key,
   admpass varchar(20)
);
insert into Admin(admid,admpass) values ('12345','12345');

drop table admin;