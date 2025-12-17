MCD : 

medaille: pays, années, description, prix estimé, vendu, image
ressembler, 0N medaille, 0N piece : spécialité
piece: pays, années, description, valeurs, prix estimé, vendu, image

collectionner, 11 medaille, 0N utilisateur
utilisateur: pseudo,mot de passe, email
posseder, 0N utilisateur, 11 piece

![Ma base de données](image.png)

MLD :

medaille : medaille_id, pays, années, description, prix extimé, image, vendu, utilisateur_id

piece : piece_id, pays, années, description, valeurs, prix estimé, image, vendu, utilisateur_id

utilisateur : utilisateur_id, pseudo, email, mot-de-passe

ressembler : medaille_id, piece_id, spécialité

