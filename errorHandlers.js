exporter  par défaut  {
    introuvable : ( req ,  res ,  suivant )  =>  {
        rés . statut ( 404 ) . json ( {
            erreur : 'Ressource introuvable'
        } )
    }
}