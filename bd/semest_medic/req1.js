db.hospital.aggregate( 
    {
      $facet : {
          "Врачи" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Колпинского'}, {"doctors.speciality": "хирург"}]}}, 
    {$project : {_id: 0, "doctors":1}}],
          "Количество" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Колпинского'}, {"doctors.speciality": "хирург"}]}}, 
    {$group : { _id: null, count: {$sum:1} } }, 
    {$project : {_id: 0, "count":1}} ]
      }
    }
    )
    