BEGIN;
INSERT INTO "user" (pseudo,email,"password")
VALUES ('JeanPatrick','jp@gmail.com','motdepassetropfort'),
('JoeWilliams','jw@yahoo.fr','blalbledd'),
('BabouchKa','jw@google.fr','blalbledd'),
('BenTEN','jw@radin.fr','blalbledd'),
('AhmedNacer','jw@baboush.fr','blalbledd'),
('GargamelWilli','jw@net.fr','blalbledd'),
('JoeDenis','jw@bravo.fr','blalbledd'),
('BabaWilliams','jw@gargamel.fr','zazaddpe');

INSERT INTO medal (country, years,
description,estimated_price,user_id)
VALUES ('France',1980,'Une pièce en bronze',10,5),
('Pays-bas', 2015,'Pièce en or massif', 35,2),
('Allemagne',2022,'Pas trop de valeurs plus sentimentale',5,8),
('Autriche',1950,'Une pièce en bronze',15,5),
('Pays-bas', 2015,'Pièce en argent', 25,2),
('Canada',1900,'Grande valeurs',100,8);

COMMIT;