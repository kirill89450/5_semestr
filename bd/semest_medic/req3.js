db.hospital.aggregate( 
    {
      $facet : {
          "Доктор" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Путановская'}, {"doctors.speciality": "травмотолог"}]}}, 
    {$match : {"doctors.len_work" : {$gt : 13}}},
    {$project : {_id: 0, "doctors":1}}],
          "Количество" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Путановская'}, {"doctors.speciality": "травмотолог"}]}},
    {$match : {"doctors.len_work" : {$gt : 13}}},
    {$group : { _id: null, count: {$sum:1} } }, 
    {$project : {_id: 0, "count":1}} ]
      }
      
    }
    )
    