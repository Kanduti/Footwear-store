
INSERT INTO `konacnabaza`.`drzava` (`idDrzava`,`Drzava`,`Poziv_na_br`) VALUES ('1','Srbija','+381'),
  ('2','Bosna','+371'),
 ('3','Hrvatska','+361'),
 ('4','Makedonija','+351'),
 ('5','Slovenija','+341'),
 ('6','Crna Gora','+331');

 INSERT INTO `konacnabaza`.`obuca`(`idObuca`,`Market_price_in_€`,`Model_Naslov`,`Vrsta`,`Uzrast`)
VALUES (1,300, 'Nike Air Max 2029','patike','M'), (2,100, 'Rebook limited','patike','Z'), (3,120,  'asics pro','patike','U'),
(4,70,'Sandale za pravo leto','sandale','Z'),(5,60,'Sandale alpine','sandale','MD'),
(6,130,'Lemo Minor','stikle','Z'),(7,170,'Gekko','cizme','Z'),(8,76,'Stone tip','cizme','D'),
(9,145,'Forest mist','cizme','M'),(10,10,'Nike max','papuce','U'),(11,120,'Verani Bellelo','cipele','Z'),
(12,70,'Verani cipele','cipele','M');

INSERT INTO `konacnabaza`.`inventar`(`idCipele`,`Velicina_eur`,`Kolicina`,`Boja`,`Obuca_idObuca`) VALUES 
(1,42, 5, 'plava',1), (2,41, 5, 'plava',1), (3, 41, 5, 'crna',1), (4 ,42, 3, 'crna',1),
(5,42, 5, 'sarena',3),(6,39, 2, 'sarena',3), (7, 34, 3, 'sarena',3),(8, 39, 4, 'krem',4), (9, 38, 3, 'krem',4), 
(10, 42, 2, 'crna',5), (11, 33, 2, 'krem',5), (12, 38, 3, 'crvena',6), (13, 39,2,'crna','7'), 
(14, 32, 2, 'braon',8), (15, 39, 4, 'krem',10), (16, 32, 2, 'krem',10), (17, 43, 4, 'krem',10),
(18, 39, 4, 'crna',11),(19, 38, 4, 'crna',11), (20, 42, 3, 'bela',12), (21, 41, 3, 'bela',12), (22, 43, 3, 'bela',12); 

INSERT INTO `konacnabaza`.`korisnik` (`idKorisnik`,`ime_i_prezime`
,`Email_adresa`, `Drzava_idDrzava`) 
values (1,'Nenad Presev','nenad@gmail.com','1'),
(2,'Hans Himilich','hans@gmail.com','2'),
(3,'Fabricio Pikateli','fab@gmail.com','3');


INSERT INTO `konacnabaza`.`ip_adresa` (`Vreme_prijave`,
`Korisnik_idKorisnik`) values ('2023-05-09 12:30',
'1'),  ('2023-05-08 12:20:06',
'2'),  ('2023-05-11 16:30:04',
'1'),  ('2023-05-10 19:36:03',
'3');

INSERT INTO `konacnabaza`.`tranzakcije` (`idTranzakcije`,`Vreme`,`inventar_idCipele`,`korisnik_idKorisnik`)
values (1,'2023-05-09 12:40',7,1), (2,'2023-05-10 22:40',8,1),(3,'2023-05-11 18:40',9,2), ('4', '2023-05-11 18:40:00', 7, '2')
