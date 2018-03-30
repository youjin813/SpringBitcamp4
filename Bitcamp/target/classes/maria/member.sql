show tables;
create table member(
id VARCHAR(20) primary key,
pass varchar(20),
name varchar(20),
ssn varchar(20),
phone varchar(20),
email varchar(20),
profile varchar(20),
addr varchar(20)
);
INSERT INTO member (id, pass,name,ssn,phone,email,profile,addr) VALUES ('lee', '1','lee','111111-1111111','010','lee@naver.com','0','1');

create table board(
bbs_seq int(1) AUTO_INCREMENT PRIMARY KEY,
title varchar(200),
content varchar(200),
regdate timestamp not null default now(),
id varchar(20),
FOREIGN KEY (id) REFERENCES member(id)
);

insert into board(title, content,id) values ('얼마나 무엇을 없는 그리하였는가?','얼마나 무엇을 없는 그리하였는가? 설레는 충분히 사는가 없으면 보이는 있는가? 같은 풀이 가치를 싶이 봄날의 착목한는 우리는 할지니, 눈에 것이다.','lee');
insert into board(title, content,id) values ('길을 인류의 예가 것이다.','길을 인류의 예가 것이다. 있는 있는 황금시대의 소금이라 것이다. 생명을 그것은 창공에 보라.','lee');
insert into board(title, content,id) values ('있는 작고 지혜는 사막이다.','있는 작고 지혜는 사막이다. 피가 열락의 미묘한 얼음 부패뿐이다.','lee');
insert into board(title, content,id) values ('끓는 설산에서 우리의 듣는다.','끓는 설산에서 우리의 듣는다. 천하를 사람은 인생을 인생에 용감하고 끓는다.','lee');
insert into board(title, content,id) values ('이상은 그들의 우리는 뼈 것이다.','이상은 그들의 우리는 뼈 것이다. 것은 이는 속에 이것이다.','lee');
insert into board(title, content,id) values ('낙원을 지혜는 싹이 그들의 인생의 봄바람을 것이다.','낙원을 지혜는 싹이 그들의 인생의 봄바람을 것이다. 얼음에 물방아 남는 보라. 수 소리다.이것은 얼마나 그들은 있을 설레는 끓는 새가 자신과 피다.','lee');
insert into board(title, content,id) values ('인간의 뭇 살 영원히 철환하였는가?.','인간의 뭇 살 영원히 철환하였는가? 우리 구하지 이것을 못할 청춘 때에, 무엇을 대한 사막이다. 같이, 우리의 없으면 이 밝은 위하여 그들의 것이다.','lee');
insert into board(title, content,id) values ('이상 인간.','이상 인간이 끓는 그들은 대고, 같지 인생에 철환하였는가? 몸이 청춘이 못할 많이 방황하였으며, 방지하는 인간에 목숨이 청춘 있으랴?','lee');
insert into board(title, content,id) values ('날카로우나 우리는 얼마나 때문이다.','날카로우나 우리는 얼마나 때문이다. 따뜻한 이상의 쓸쓸한 그들은 얼마나 피부가 날카로우나 있으랴?','lee');
insert into board(title, content,id) values ('황금시대를 인생의 불러 때문이다.','그것은 황금시대를 인생의 불러 때문이다. 위하여, 갑 풀밭에 반짝이는 그들은 인생을 되는 설산에서 위하여서. 못할 새 하는 우리 있는가?','lee');
insert into board(title, content,id) values ('구하기 아름다우냐?','방지하는 거선의 품으며, 구하기 아름다우냐? 품고 사랑의 피고, 위하여 피는 열락의 심장의 있는 있는가?','lee');
insert into board(title, content,id) values ('그들의 칼이다.','하여도 부패를 못할 영락과 그들의 목숨이 하였으며, 그들의 칼이다. 않는 속잎나고, 우리 끓는 운다.','lee');
insert into board(title, content,id) values ('끝에 놀이 소금이라 것이다.','끝에 놀이 소금이라 것이다. 희망의 청춘은 거친 천고에 듣는다. 설산에서 살 소리다.이것은 같은 피가 미묘한 반짝이는 것이다.','lee');
insert into board(title, content,id) values ('풀밭에 능히 대한 칼이다.','구할 천자만홍이 속잎나고, 풀밭에 능히 대한 칼이다. 이상의 그러므로 같은 이상이 관현악이며, 대고, 있으랴?','');
insert into board(title, content,id) values ('그들은 청춘의 두기 꽃이 때문이다.','아니더면, 노년에게서 되려니와, 때문이다. 그들은 청춘의 두기 꽃이 때문이다. 그러므로 그들의 이상은 하여도 불어 광야에서 용감하고 것이다.','lee');
insert into board(title, content,id) values ('반짝이는 끓는다.','사는가 그러므로 따뜻한 찾아 얼마나 그들에게 약동하다. 가치를 물방아 싶이 커다란 할지니, 반짝이는 끓는다.','lee');
insert into board(title, content,id) values ('창공에 우리 길을 위하여','창공에 우리 길을 위하여 노년에게서 뿐이다. 천하를 불어 구하기 위하여서, 인도하겠다는 끓는다.','lee');
insert into board(title, content,id) values ('우리는 것이다.','많이 방지하는 모래뿐일 우리는 것이다. 우리 만물은 심장의 황금시대다. 것이 되는 위하여 때에, 쓸쓸하랴?','lee');
insert into board(title, content,id) values ('이성은 하여도.','이성은 하여도 내려온 수 아니다. 밥을 인생을 미인을 없는 가치를 아니더면, 위하여, 피고 따뜻한 사막이다.','lee');
insert into board(title, content,id) values ('귀는 맺어.','인류의 청춘 그들의 그들에게 것이다. 귀는 맺어, 설산에서 설레는 못할 봄바람이다.','lee');
insert into board(title, content,id) values ('미묘한 봄바람이다.','이상 장식하는 예수는 따뜻한 동산에는 갑 끓는다. 이것이야말로 든 미묘한 봄바람이다.','lee');
insert into board(title, content,id) values ('이것을 황금시대.','청춘을 때까지 이상의 무엇을 봄바람이다. 이것을 황금시대를 가진 설레는 웅대한 부패를 것이다. 낙원을 곳으로 인간이 인생을 바로 하였으며, 있는 싶이 철환하였는가? 착목한는 구하지 공자는 보이는 피다.','lee');
insert into board(title, content,id) values ('목숨이 찬미를.','그것을 군영과 따뜻한 살 품었기 얼음과 뜨고, 위하여 있다. 목숨이 찬미를 보내는 피가 붙잡아 미묘한 방지하는 못하다 아니다. 끓는 스며들어 그들의 칼이다. 같이 길지 인생을 방황하여도, 없으면, 미인을 사랑의 별과 이 아름다우냐?','lee');
insert into board(title, content,id) values ('청춘을 이성은 듣는다.','우리 아니더면, 청춘을 이성은 듣는다. 방황하였으며, 위하여 예가 그들은 할지라도 광야에서 끝에 교향악이다. 사는가 살았으며, 품었기 몸이 끓는 얼음에 가지에 영락과 그들에게 것이다.','');
insert into board(title, content,id) values ('인생을 피는 않는 황금시대다.','인생을 피는 않는 황금시대다. 구하지 광야에서 이상 천하를 붙잡아 봄바람이다.','lee');
insert into board(title, content,id) values ('영원히 공자는 하였으며.','영원히 공자는 하였으며, 그러므로 따뜻한 보배를 품에 무엇이 그들에게 듣는다. 힘차게 청춘이 능히 때에, 것이다. 이것은 보내는 있는 그들의 봄바람이다.','lee');
