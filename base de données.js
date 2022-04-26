importer  {
    writeFileSync
}  de  'fs'
importer les  devises  depuis  '../../database/db.json'


 fonction  d'exportation get_devises ( )  {
    retour  devises
}

export  const  get_devises  =  id  =>  {
    const  podcast  =  devises . trouver ( devises  =>  devises . id  ==  id )

    retour  devises
}


 fonction  d'exportation add_devises ( devises )  {
    soit  new_devises  =  [
        ... devises ,
        {
            ... devises ,
            "identifiant" : Date . maintenant ( ) . toString ( 36 )
        }
    ]
    const  new_data  =  JSON . stringifier ( new_devises )

    writeFileSync ( "database/db.json" ,  new_data )

    retour  new_devises
}

    const  new_data  =  JSON . stringifier ( devises )

    writeFileSync ( "database/db.json" ,  new_data )

    retour  devises
}

 fonction  d'exportation delete_devises ( id )  {
    soit  index  =  devises . findIndex ( devises  =>  devises . id  ==  id )

    devises . épissure ( indice ,  1 )
    delete_hosts ( id )
    const  new_data  =  JSON . stringifier ( devises )

    writeFileSync ( "database/db.json" ,  new_data )

    retourner  des podcasts
}