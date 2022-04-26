importer  express  de  'express'
importer la  validation  depuis  '../../outils/validation'
importer  Controller  depuis  './Controller'


const  routeur  =  express . Routeur ( )

// balados

routeur . get ( '/ devises' ,  Controller . get_all )

routeur . obtenir ( '/devises/:id' ,
    ... validation . get_devises ,
         Controller . obtenir )

routeur . poster ( '/devises' ,
    ... validation . create_devise ,
         Controller . créer )

routeur . mettre ( '/devises/:id' ,
    ... validation . update_devises ,
       Controller . mise à jour )
routeur . delete ( '/devises/:id' ,
    ... validation . delete_devises ,
          Controller . supprimer )

exporter le  routeur par défaut  ;