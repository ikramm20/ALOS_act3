importer  {
    corps ,
    paramètre ,
    Chèque
}  de  'express-validator'

fonction  check_if_date ( chaîne )  {
    reviens  ! isNaN ( nouvelle  Date ( chaîne ) . getDate ( ) )
}

fonction  capitaliser ( chaîne )  {
     chaîne de retour . charAt ( 0 ) . enMajuscule ( )  +  chaîne . tranche ( 1 )
}

exporter  par défaut  {
    get_podcast : [
        param ( 'id' ) . estChaîne ( ) . garniture ( )
    ] ,
    créer_podcast : [
        corps ( 'nom' ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) ,
        corps ( 'statut' ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) . isIn ( [ 'En cours' ,  'Terminé' ,  'Hiatus' ] ) ,
        corps ( 'auditeurs' ) . estNumérique ( ) . àInt ( ) ,
        corps ( 'image' ) . estURL ( ) ,
        corps ( 'environ' ) . estChaîne ( ) . garniture ( ) ,
        corps ( 'releaseDate' ) . personnalisé ( valeur  =>  check_if_date ( valeur ) ) ,
        corps ( 'catégorie' ) . estChaîne ( ) . garniture ( ) . en Minuscule ( ) . isIn ( [ 'fiction' ,  'série' ,  'interviews' ] ) ,
        corps ( 'hôtes' ) . estTableau ( ) ,
        vérifier ( 'hosts.*.id' ) . estInt ( ) ,
        vérifier ( 'hosts.*.name' ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) . isAlpha ( "en-US" ,  {
            "ignorer" : [ " " ,  "-" ,  "'" ]
        } ) . garniture ( )

    ] ,
    mise à jour_podcast : [
        corps ( 'nom' ) . facultatif ( ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) ,
        corps ( 'statut' ) . facultatif ( ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) . isIn ( [ 'En cours' ,  'Terminé' ,  'Hiatus' ] ) ,
        corps ( 'auditeurs' ) . facultatif ( ) . estNumérique ( ) . àInt ( ) ,
        corps ( 'image' ) . facultatif ( ) . estURL ( ) ,
        corps ( 'environ' ) . facultatif ( ) . estChaîne ( ) . garniture ( ) ,
        corps ( 'releaseDate' ) . facultatif ( ) . personnalisé ( valeur  =>  check_if_date ( valeur ) ) ,
        corps ( 'catégorie' ) . facultatif ( ) . estChaîne ( ) . garniture ( ) . en Minuscule ( ) . isIn ( [ 'fiction' ,  'série' ,  'interviews' ] ) ,
        corps ( 'hôtes' ) . facultatif ( ) . estTableau ( ) ,
        vérifier ( 'hosts.*.id' ) . facultatif ( ) . estInt ( ) ,
        vérifier ( 'hosts.*.name' ) . facultatif ( ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) . isAlpha ( "en-US" ,  {
            "ignorer" : [ " " ,  "-" ,  "'" ]
        } ) . garniture ( ) ,
        param ( 'id' ) . estChaîne ( ) . garniture ( )
    ] ,
    delete_podcast : [
        param ( 'id' ) . estChaîne ( ) . garniture ( )
    ] ,
    // hôtes
    créer_hôte : [
        corps ( 'nom' ) . estChaîne ( ) . garniture ( ) . customSanitizer ( valeur  =>  capitaliser ( valeur ) ) ,
        corps ( 'e-mail' ) . garniture ( ) . estEmail ( )
    ]
}